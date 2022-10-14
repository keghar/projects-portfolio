import React from 'react'
import Link from 'next/link'


export default function Post( {post} ) {
  return (
    
    <>
    <div className='text-gray-600'>
        <img className='rounded-xl' src={post.frontmatter.cover_image} alt='' />
       <h2> {post.frontmatter.title}
       </h2>
       <h3>Posted on {post.frontmatter.date}</h3>
       <p className='mb-5'>{post.frontmatter.excerpt}</p>

       <Link href={`/blog/${post.slug}`}>
       <a className='text-[#6ab7dd] font-bold rounded-full py-2 px-4 bg-[#ecf0f3] tracking-widest hover:text-gray-700 '>Read More</a></Link>
       </div>
    </>
  )
}
