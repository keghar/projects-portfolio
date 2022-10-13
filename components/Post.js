import React from 'react'
import Link from 'next/link'


export default function Post( {post} ) {
  return (
    <div>
       <h1>
        <img src={post.frontmatter.cover_image} alt='' />
        {post.frontmatter.title}
       </h1>
       <div>Posted on {post.frontmatter.date}</div>
       <p>{post.frontmatter.excerpt}</p>

       <Link href={''}>Read More</Link>
    </div>
  )
}
