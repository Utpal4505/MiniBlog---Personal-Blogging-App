import { createContext, useState } from "react";

const BlogContext = createContext();

export function BlogContextProvider({ children }) {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (id) => {
    const shoulddelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (shoulddelete) setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
}

export { BlogContext };
