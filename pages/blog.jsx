import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

const Blog = ({ blogs }) => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-f h-full mx-auto p-2 flex justify-center items-center">
        <div className="text-center text-[#445566] ">
          <Head>
            <title>My Blog</title>
          </Head>
          <h1 className="text-5xl">Welcome to my blog</h1>
          <p className="mb-8">This is a subtitle idk what to type here</p>
          <ul className="text-left m-auto w-max">
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link href={`/blog/${blog.slug}`}>
                  <a>
                    {blog.date}:{blog.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync("./content/blogs");

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
