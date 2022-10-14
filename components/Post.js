import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Post( {post} ) {
  return (
    
    <>  
    
    <div className="flex items-center jestify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in duration-300">
    <div className='text-gray-600'>
      
          <div className='relative'>
          <Image className='rounded-xl' src={post.frontmatter.cover_image} alt='' height='300' width='500' />
          </div>
          
       <h2> {post.frontmatter.title}
       </h2>
       <h3>Posted on {post.frontmatter.date}</h3>
       <p className='mb-5'>{post.frontmatter.excerpt}</p>

       <Link href={`/blog/${post.slug}`}>
       <a className='text-[#6ab7dd] font-bold rounded-full py-2 px-4 bg-[#ecf0f3] tracking-widest hover:text-gray-700 '>Read More</a></Link>
       </div></div>
    </>
  )
}
