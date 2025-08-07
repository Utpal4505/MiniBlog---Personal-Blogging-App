import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../src/context/BlogContext";

function SingleBlog() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);

  const blog = blogs.find((e) => e.id == id);
  console.log(blog);
  console.log(typeof blog);
  
  

  if (!blog) return <p className="text-center mt-20 text-white">Blog not found</p>;

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
      <header></header>
      <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
      <p className="text-[#b3b3b3] text-lg">{blog.body}</p>
    </main>
  );
}

export default SingleBlog;