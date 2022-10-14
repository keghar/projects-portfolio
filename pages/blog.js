import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Head from "next/head";
import Contact from '../components/Contact'
import { sortByDate } from '../utils'

import Post from "../components/Post";

export default function blog({posts}) {
  return (
    <>
    
    <Head>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      <title>Welcome to my blog!</title>
    </Head>
    <div className="px-6">
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] mx-auto h-full p-2 flex justify-center items-center">
        <div className="mt-[-400px]">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            My journey into tech...
          </p>
          <h1 className="py-4 text-gray-700">
            Welcome To My <span className="text-[#6ab7dd]">Blog</span>
          </h1>

          <p className="py-4 text-gray-600 max-w-[70%} m-auto">
            I will be posting about my journey of learning how to code.
          </p>
          <div className="flex m-auto py-4">

            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-h-8 mb-10" >

           
              
              {posts.map((post, index) => (
                 <div className="relative flex items-center jestify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in duration-300">
             <Post key={index} post={post} /></div>
              ))}
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
   
    </div>
   
  </>
);
};



export async function getStaticProps() {
  // get files from posts folder
  const files = fs.readdirSync(path.join('posts'));

  // get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace('.md', '');

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
