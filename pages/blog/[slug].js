import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}){
  return (
    <div className="w-full text-gray-600">
      <div className="max-w-[900px] m-auto px-2 w-full flex">
        <div className='w-full shadow-xl shadow-gray-400 rounded-xl p-4 my-20 mx-5 md:mx-10'>
          <div className='flex flex-row-reverse'>
       <Link href='/blog'><a className='my-5 shadow-md shadow-gray-400 px-4 py-2 rounded-xl uppercase hover:scale-105'>Go Back</a></Link></div>
         <div className='flex flex-col justify-center items-center pb-4'>
        <h1>{title}</h1>
        <p>Posted on {date}</p></div>
        <img className='rounded-xl hover:scale-105 ease-in duration-300' src={cover_image} alt='' />
        
        <div>
            <div dangerouslySetInnerHTML={{__html:marked(content)} }>

            </div>
        </div>


        </div>
    
      </div>
    </div>
  )
}
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        },
    }))

    return {
        paths,
        fallback: false
    }

}
export async function getStaticProps({params: {slug} }) {
    const markdownWithMeta =fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        }
    }
    
}

