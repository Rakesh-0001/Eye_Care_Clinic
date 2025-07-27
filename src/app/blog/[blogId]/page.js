import React from "react";
import { blogData } from "../../../Datas/blogData.js"; // Adjust the path as needed
import BlogDetails from "@/components/BlogDetails";

export default function BlogPage({ params }) {
  const blogId = parseInt(params.blogId);
  const blog = Array.isArray(blogData) ? blogData.find((blog) => blog.id === blogId) : null;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
}