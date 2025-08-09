import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../src/context/BlogContext.jsx";

function Home() {
  const { blogs, deleteBlog } = useContext(BlogContext);

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="text-6xl">👋</div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
            Welcome to <span className="text-[#f0f0f0]">MiniBlog</span>
          </h1>
          <p className="text-[#b3b3b3] leading-relaxed text-xl mb-10 max-w-2xl mx-auto ">
            Start sharing your thoughts with the world in a beautiful,
            distraction-free environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/add-blogs"
              className="flex items-center text-[#212121] font-semibold text-lg shadow-lg transition-all duration-200 px-8 py-4 bg-[#f0f0f0] gap-3 rounded-xl hover:shadow-xl hover:scale-105 hover:bg-[#f2f2f2]"
            >
              <span className="text-xl">✨</span>
              Write Your First Blog
            </Link>
            <Link
              to="/blogs"
              className="flex items-center gap-3 text-lg font-semibold transition-all duration-200 px-8 py-4 bg-[#2f333780] border border-[#3c404480] rounded-xl hover:bg-[#2f3337b3] "
            >
              <span className="text-xl">📚</span>
              Browse All Blogs
            </Link>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#f0f0f0]">
                Latest Stories
              </h2>
              <p className="text-[#b3b3b3]">
                Fresh insights and ideas from our community
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="group p-6 rounded-xl bg-[#25292c4d] border border-[#3c404480] transition-all duration-300 break-words hover:shadow-2xl hover:scale-[1.02] hover:shadow-[#fcfcfc05] hover:bg-[#3a3f452d]"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[#f0f0f0] mb-4 break-words">
                      {blog.title.length > 40
                        ? blog.title.slice(0, 40) + "...."
                        : blog.title}
                    </h2>
                    <p className="text-[#b3b3b3]">
                      {blog.body.length > 200
                        ? blog.body.slice(0, 200) + "..."
                        : blog.body}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-2 text-[#f0f0f0] hover:text-[#f0f0f0cc] font-semibold transition-all duration-200 group"
                    >
                      <span>Read More</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                    <button
                      className="text-[#b3b3b3] hover:text-[#EF4444] transition-colors px-3 py-1 hover:bg-[#ef44441a] rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center pt-8">
            <Link
              to="/blogs"
              className="inline-flex items-center text-[#f0f0f0] font-semibold text-lg gap-2 px-4 py-2 hover:bg-[#2f333780] hover:text-[#FAFAFA] rounded-lg transition-all duration-200 hover:scale-105"
            >
              <span>View All Blogs</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
