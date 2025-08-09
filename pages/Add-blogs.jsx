import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../src/context/BlogContext.jsx";

function Add_blogs() {
  const { addBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //----------------Functions----------------//
  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      alert("Please Enter Valid Detail");
      return;
    }

    const blog = {
      id: Date.now(),
      title,
      body,
    };

    addBlog(blog);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-2 py-18">
        <div className="upper-text mb-12">
          <Link
            to="/"
            className="font-medium text-[17px] px-4 py-2 text-[#f0f0f0cc] hover:bg-[#2f333780] hover:text-[#FAFAFA] rounded-lg "
          >
            ← Go Back
          </Link>
          <div className="text">
            <h1 className="text-5xl font-bold text-center mt-14 text-[#f0f0f0]">
              Add a New Blog
            </h1>
            <p className="text-center text-xl mt-4 text-[#b3b3b3]">
              Share your thoughts with the world
            </p>
          </div>
        </div>

        <div className="input-area">
          <form className="p-8 space-y-8 rounded-2xl bg-[#25292c4d] border border-[#3c404480] shadow-xl">
            <div>
              <label
                htmlFor="Title"
                className="text-lg text-[#f0f0f0] mb-3 font-semibold block"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your blog title..."
                className="w-full px-6 py-4 text-[#f0f0f0] text-lg bg-[#2a2e32cc] rounded-xl border border-[#3c404480] transition-all duration-200 focus:outline-none focus:border-[#f0f0f080] focus:ring-2 focus:ring-[#f0f0f080]"
              />
            </div>
            <div>
              <label
                htmlFor="Body"
                className="text-lg text-[#f0f0f0] mb-3 font-semibold block"
              >
                Body
              </label>
              <textarea
                name="body"
                id="body"
                rows="14"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write your blog content here..."
                className="w-full px-6 py-4 text-[#f0f0f0] text-lg bg-[#2a2e32cc] rounded-xl border border-[#3c404480] transition-all duration-200 focus:outline-none focus:border-[#f0f0f080] focus:ring-2 focus:ring-[#f0f0f080] leading-relaxed resize-y "
              ></textarea>
            </div>

            <div className="flex gap-4 pt-6 flex-col sm:flex-row">
              <button
                type="submit"
                onClick={onhandleSubmit}
                className="px-8 py-4 bg-[#f0f0f0] rounded-xl cursor-pointer text-lg font-semibold text-[#212121] flex-1 transition-all duration-200 shadow-lg hover:shadow-xl hover:bg-[#f0f0f0e6]"
              >
                Submit
              </button>
              <button
                type="reset"
                className="px-8 py-4 bg-[#2f333780] border border-[#3c404480] rounded-xl cursor-pointer text-lg font-semibold text-[#f0f0f0] transition-all duration-200 shadow-lg hover:shadow-xl hover:bg-[#333436]"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add_blogs;
