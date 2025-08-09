import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../src/context/BlogContext.jsx";

function SingleBlog() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);

  const blog = blogs.find((e) => e.id == id);
  console.log(blog);
  console.log(typeof blog);

  if (!blog)
    return <p className="text-center mt-20 text-white">Blog not found</p>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link
          to="/blogs"
          className="font-medium text-[17px] px-4 py-2 text-[#f0f0f0cc] hover:bg-[#2f333780] hover:text-[#FAFAFA] rounded-lg"
        >
          ← Back to All Blogs
        </Link>
      </div>
      <header className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-4xl font-bold text-[#f0f0f0] leading-tight flex-1 mr-4">
            {blog.title}
          </h1>
          <button className="text-[#b3b3b3] hover:text-[#EF4444] transition-colors p-3 hover:bg-[#ef444430] rounded-xl border border-[#3c404480] hover:border-[#ff4444]">
            <span className="text-lg">🗑️</span>
          </button>
        </div>
      </header>
      <div className="prose prose-invert prose-lg max-w-none">
        <div
          className="text-[#f0f0f0] leading-relaxed whitespace-pre-line"
          style={{ fontsize: "1.125rem", lineheight: "1.75" }}
        >
          <p className="text-[#b3b3b3] text-lg">{blog.body}</p>
        </div>
      </div>
    </main>
  );
}

export default SingleBlog;
