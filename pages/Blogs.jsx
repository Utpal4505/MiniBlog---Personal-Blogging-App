import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../src/context/BlogContext.jsx";

function Blogs() {
  const { blogs, deleteBlog } = useContext(BlogContext);

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="upper-text mb-12">
          <Link
            to="/"
            className="font-medium text-[17px] px-4 py-2 text-[#f0f0f0cc] hover:bg-[#2f333780] hover:text-[#FAFAFA] rounded-lg "
          >
            ← Go Back
          </Link>
          <div className="text">
            <h1 className="text-4xl font-bold text-center mt-14 text-[#f0f0f0]">
              All Blogs
            </h1>
            <p className="text-center text-xl mt-4 text-[#b3b3b3]">
              Explore all stories from our community
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group p-6 rounded-xl bg-[#25292c4d] border border-[#3c404480] transition-all duration-300 break-words hover:shadow-2xl hover:scale-[1.02] hover:shadow-[#fcfcfc05] hover:bg-[#3a3f452b]"
            >
              <h2 className="text-xl font-bold text-[#f0f0f0] mb-4 group-hover:text-[#f0f0f0] transition-colors leading-tight">
                {blog.title.length > 40
                  ? blog.title.slice(0, 40) + "...."
                  : blog.title}
              </h2>
              <p className="text-[#B3B3B3] mb-6 leading-relaxed">
                {" "}
                {blog.body.length > 200
                  ? blog.body.slice(0, 200) + "..."
                  : blog.body}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-[#f2f2f2] hover:text-[#f2f2f2CC] font-semibold transition-all duration-200 group"
                >
                  <span>Read More</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
                <button
                  className="text-[#bfbfbf] hover:text-[#EF4444] transition-colors px-3 py-1 hover:bg-[#ef44441a] rounded-lg text-sm font-medium"
                  onClick={() => deleteBlog(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Blogs;
