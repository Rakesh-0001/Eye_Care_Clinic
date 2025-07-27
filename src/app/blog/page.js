// app/blog/page.js
"use client";
import React, { useState, useEffect } from "react";
import { blogCategories, blogData } from "../../Datas/blogData.js"; // Adjust the import path as necessary
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on category and search query
  const filteredPosts = blogData.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Recent posts (last 3 posts)
  const recentPosts = [...blogData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  return (
    <section className="blog-section ">
      <section className="contact-header ">
        <div className="container mt-3">
          <h1 className="contact-title-custom text-end mb-1">
            <span className="contact-heading-green">Discover</span>{" "}
            <span className="contact-heading-white"> Articles Here</span>
          </h1>
        </div>
      </section>

      <div className="container container_ py-5">
        <div className="contact-page-breadcrumb ms-1">
          <span>• Blog</span>
        </div>

        <div className="row mt-3">
          {/* Left Sidebar - Categories */}
          <div className="col-12 col-lg-3 mb-4 mb-md-0">
            <div className="blog-sidebar">
              {/* Search */}
              <div className="search-bar-custom">
                <i className="bi bi-search search-icon"></i>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div className="categories-section mb-0 mb-md-4">
                <ul className="categories-list mt-4">
                  {blogCategories.map((category) => (
                    <li
                      key={category.id}
                      className={`category-item mb-2 ${
                        activeCategory === category.name ? "active" : ""
                      }`}
                      onClick={() => setActiveCategory(category.name)}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="recent-blogs-container d-none d-md-block">
                <h4 className="recent-blogs-title">Recent blogs</h4>
                <div className="recent-blogs-list">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="recent-blogs-item">
                      <div className="recent-blogs-image">
                        <img
                          src={post.image}
                          alt={post.title}
                          width={70}
                          height={70}
                          className="img-fluid"
                        />
                      </div>
                      <div className="recent-blogs-content">
                        <div className="recent-blogs-date">
                          <i className="bi bi-calendar"></i>
                          <span className="date-text">{post.createdAt}</span>
                        </div>
                        <h5 className="recent-blogs-post-title">
                          {post.title}
                        </h5>
                        <div className="recent-blogs-category">
                          {post.category}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Blog Posts */}
          <div className="col-12 col-lg-9 mb-5 mb-md-0">
            {/* Blog Posts Grid */}
            <div
              className="row mt-5 mt-lg-0 mx-auto d-flex  justify-content-between w-100 
               "
            >
              {currentPosts.length > 0 ? (
                currentPosts.map((post, id) => (
                  <div key={post.id} className="col-12 col-sm-6 col-lg-6 mb-5 ">
                    <div className="blogCard ms-0 ms-lg-4">
                      {/* Top Image */}
                      <div className="imageContainer">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={366}
                          height={230}
                          className="blogImage"
                        />
                        {/* Green Overlay Shape */}
                        <div className="collapseShape">
                          <Image
                            src="/assets/Images/Group 64.png"
                            alt="shape"
                            width={366}
                            height={152}
                            className="shapeImage"
                          />
                          <div className="overlayContent">
                            <div className="views mt-2">
                              <span className="viewsIcon">
                                <i className="bi bi-eye text-white"></i>
                              </span>
                              <span className="viewsCount text-white">
                                {post.viewCount} views
                              </span>
                            </div>
                            <div className="excerpt">{post.excerpt}</div>
                          </div>
                        </div>
                      </div>
                      {/* Title and Arrow */}
                      <div className="titleRow d-flex align-items-center justify-content-between">
                        <span className="blogTitle">{post.category}</span>
                        <span className="arrow">
                          <Link href={`/blog/${post.id}`}>
                            <Image
                              src="/assets/Images/Group 38.png"
                              alt="arrow"
                              width={32}
                              height={32}
                            />
                          </Link>
                        </span>
                      </div>
                      <div className="postDate">
                        <i className="bi bi-calendar"></i>
                        <span className="date ms-2 text-white">
                          {post.createdAt}
                        </span>
                      </div>

                      {/* Profile Footer */}
                      <div className="footer">
                        <div className="authorInfo">
                          <Image
                            src={post.image}
                            alt={post.author}
                            width={40}
                            height={40}
                            className="authorAvatar"
                          />
                          <span className="postedBy">
                            Posted by :{" "}
                            <span className="author">{post.author}</span>
                          </span>
                        </div>
                      </div>
                      {id < currentPosts.length - 2 && (
                        <hr className="Blog-Post-divider" />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p>No blog posts found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredPosts.length > postsPerPage && (
              <nav className="custom-pagination mt-0 mt-md-4">
                <ul className="pagination-list">
                  {/* Previous Arrow */}
                  <li
                    className={`pagination-item arrow`}
                    onClick={
                      currentPage !== 1
                        ? () => setCurrentPage(currentPage - 1)
                        : undefined
                    }
                  >
                    <span
                      className={`arrow-circle left-arrow${
                        currentPage !== 1 ? " active-arrow" : ""
                      }`}
                      style={{
                        background: currentPage !== 1 ? "#000B41" : "#D9D9D9",
                      }}
                    >
                      <img
                        src="/assets/Images/left-arrow.png"
                        alt="Previous"
                        className="arrow-img"
                      />
                    </span>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <li
                        key={page}
                        className={`pagination-item ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        <span
                          className={`number-circle${
                            currentPage === page ? " active-page" : ""
                          }`}
                        >
                          {page}
                        </span>
                      </li>
                    )
                  )}
                  {/* Next Arrow */}
                  <li
                    className={`pagination-item arrow`}
                    onClick={
                      currentPage !== totalPages
                        ? () => setCurrentPage(currentPage + 1)
                        : undefined
                    }
                  >
                    <span
                      className={`arrow-circle${
                        currentPage !== totalPages ? " active-arrow" : ""
                      }`}
                      style={{
                        background:
                          currentPage !== totalPages ? "#000B41" : "#D9D9D9",
                      }}
                    >
                      <img
                        src="/assets/Images/right-arrow.png"
                        alt="Next"
                        className="arrow-img"
                      />
                    </span>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          {/* Recent Posts */}
          <div className="recent-blogs-container d-block mx-1 d-md-none">
            <h4 className="recent-blogs-title">Recent blogs</h4>
            <div className="recent-blogs-list">
              {recentPosts.map((post) => (
                <div key={post.id} className="recent-blogs-item">
                  <div className="recent-blogs-image">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={70}
                      height={70}
                      className="img-fluid"
                    />
                  </div>
                  <div className="recent-blogs-content">
                    <div className="recent-blogs-date">
                      <i className="bi bi-calendar"></i>
                      <span className="date-text">{post.createdAt}</span>
                    </div>
                    <h5 className="recent-blogs-post-title">{post.title}</h5>
                    <div className="recent-blogs-category">{post.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
