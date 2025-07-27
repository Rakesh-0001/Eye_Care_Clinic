import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../Datas/blogData.js"; // Adjust the import path as necessary

const BlogDetails = ({ blog }) => {
  // Get data from the array (not index)
  const Blogdata = blogData.find((b) => b.id === blog.id) || {
    content: "Detailed description not available",
    excerpt: "",
  };

  return (
    <section className="blog-details-section  py-5">
      <div className="container">
        {/* Breadcrumb */}
        <Link href="/blog" className="back-link nav-link mb-4">
          <span>. Blog </span> &gt; <span>{blog.category} </span> &gt;{" "}
          <span>{blog.title} </span>
        </Link>
        {/* Title */}
        <h1 className="blog-details-title mt-3 mb-2">{blog.title}</h1>
        {/* Description */}
        <div className="blog-details-excerpt mb-3 mt-3">{blog.excerpt}</div>
        {/* Author, Date, Share */}
        <div className="blog-details-meta d-flex align-items-start  gap-3 mb-4 flex-wrap">
          <span className="blog-details-author ">Posted by: {blog.author}</span>
          <span className="blog-details-date">
            <i className="bi bi-calendar me-2"></i>
            {blog.createdAt}
          </span>
          <button
            className="btn  btn-sm blog-details-share-btn text-white rounded-pill px-3"
            style={{ backgroundColor: "#00A876EB" }}
          >
            {" "}
            <i className="bi bi-share me-2"></i> Share
          </button>
        </div>
        {/* Main Image */}
        <div className="blog-details-image mb-4 position-relative">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="blog-details-img"
            style={{ borderRadius: "24px" }}
          />
          <img
            src="/assets/Images/eye-img.png"
            alt="Eye Logo"
            className="blog-details-eye-corner"
          />
        </div>
        {/* Content */}
        <div>
          <h2 className="blog-details-content-title mb-3">Articles Here</h2>
          <div className="blog-details-content">
            {/* Example repeated content for demo, replace with {blog.content} */}
            <p>{Blogdata.content || "Content not available for this blog."}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
