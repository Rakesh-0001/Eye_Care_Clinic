"use client";
import React, { useState } from "react";
import Image from "next/image"; // Use this if you're using Next.js. If not, use <img> instead.
import jobOpeningsData from "../../Datas/jobOpeningsData.js"; // Adjust the import path as necessary
import Link from "next/link.js";

const categories = [
  "Medical Professionals",
  "Clinical Support",
  "Optical Services",
  "Administrative",
];

const careerBenefitsData = [
  {
    title: "Professional Growth & Skill Development:",
    description:
      "Gain hands-on experience with the latest in ophthalmic technology and receive ongoing training to advance your career in eye care.",
  },
  {
    title: "Collaborative & Compassionate Work Culture:",
    description:
      "Work alongside leading ophthalmologists, optometrists, and healthcare professionals in a supportive, patient-first environment.",
  },
  {
    title: "Purpose–Driven Impact:",
    description:
      "Be part of life-changing work by helping restore and protect vision for patients across all age groups — every role here makes a difference.",
  },
  // Add more objects as needed
];

export default function Career() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter by category and (if search present) by location
  const jobs = jobOpeningsData.filter(
    (job) =>
      job.category === activeCategory &&
      (!search.trim() ||
        job.location.toLowerCase().includes(search.trim().toLowerCase()))
  );

  return (
    <section className="contact-content-section ">
      <section className="contact-header ">
        <div className="container mt-3">
          <h1 className="contact-title-custom text-end mb-1">
            <span className="contact-heading-green">Career</span>{" "}
          </h1>
        </div>
      </section>

      <div className="container">
        <div className="row align-items-center mt-4 mb-1 mb-md-5 flex-column-reverse flex-md-row">
          {/* Left: Image */}
          <div className="col-12 col-md-5 d-flex justify-content-center mb-2 mb-md-0">
            <div className="career-img-wrapper position-relative d-none d-md-block">
              <img
                src="/assets/Images/Subtract.jpg"
                alt="Clinic, nagercoil"
                className="career-img"
              />
              <div className="career-img-badge-outside ">Clinic, nagercoil</div>
            </div>
          </div>
          {/* Right: Text */}
          <div className="col-12 col-md-7">
            <div className="contact-page-breadcrumb ps-0 mb-3 mb-md-1 mt-4">
              <span>• Career</span>
            </div>
            <h2 className="career-title mb-3">Explore Career Opportunities</h2>
            <p className="career-desc mb-3 mt-0 mt-md-2">
              Be part of a committed team delivering excellence in eye care —
              from medical professionals to support staff— all working together
              to restore vision and transform lives through compassionate care.
            </p>
            <p className="career-desc2">
              At Bejan Singh Eye Hospital, we believe every eye deserves
              exceptional care, and that begins with an exceptional team. We are
              recognized for our excellence in{" "}
              <span className="career-bold">eye treatment</span> and{" "}
              <span className="career-bold">advanced surgical procedures</span>{" "}
              throughout Tamil Nadu. We offer a progressive workplace where
              healthcare team members are encouraged to expand their skills,
              build rewarding careers, and contribute to advancements in
              ophthalmology.
            </p>
          </div>
        </div>

        <section className="job-openings-section py-0 py-md-4">
          <h2 className="job-openings-title mb-2 text-start text-md-center">
            Current Job Openings at Bejan Singh Eye Hospital
          </h2>
          <p className="job-openings-desc  text-start text-md-center  mt-4">
            We are constantly looking for talented individuals to strengthen our
            team. Explore our current{" "}
            <span className="job-openings-bold">
              eye hospital job vacancies
            </span>{" "}
            and find your next career <br></br> opportunity:
          </p>
        </section>

        <section className="job-openings-dyn-section mt-2 mt-md-0 py-4 py-md-3">
          <div className="  ">
            {/* Search Bar */}
            <div className="d-flex justify-content-center align-items-center mb-1 mb-md-4">
              <div className="job-search-container d-flex  align-items-center px-3 py-2">
                <div class="input-group job-search-input-wrapper d-flex align-items-center flex-grow-1 ">
                  <span
                    class="input-group-text border-none shadow-none "
                    id="basic-addon1"
                  >
                    <i className="bi bi-geo-alt job-search-location-icon"></i>
                  </span>

                  <input
                    type="text"
                    className="form-control job-search-input shadow-none border-0"
                    placeholder="location"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <button
                  className=" job-search-btn d-flex justify-content-between align-items-center ms-0 ms-md-3"
                  type="button"
                  onClick={() => {}} // Optionally, trigger search on click
                >
                  <i className="bi bi-search me-0 me-md-3"></i>
                  Search
                </button>
              </div>
            </div>

            {/* Categories Tabs */}
            <div className="job-categories-tabs-scroll-wrapper">
              <div className="job-categories-tabs d-flex justify-content-between align-items-center mb-3">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className={`job-category-tab mt-5 mb-2 pb-2${
                      activeCategory === cat ? " active" : ""
                    }`}
                    onClick={() => setActiveCategory(cat)}
                    style={{ cursor: "pointer" }}
                  >
                    {cat}
                  </div>
                ))}
              </div>
              <div className="job-categories-underline">
                <div
                  className="job-categories-underline-active"
                  style={{
                    width: `calc(100% / ${categories.length})`,
                    left: `calc(${categories.indexOf(
                      activeCategory
                    )} * 100% / ${categories.length})`,
                  }}
                ></div>
              </div>
            </div>

            {/* Jobs Listing */}
            <div className="job-listing-section mt-5">
              {jobs.length === 0 && (
                <div className="text-center text-muted py-5">
                  No jobs found.
                </div>
              )}
              {jobs.map((job, idx) => (
                <div key={job.id} className="job-listing-item mb-4  pb-3">
                  <div className="d-flex justify-content-between align-items-center flex-wrap ">
                    <div>
                      <div className="job-listing-title mb-1">
                        {job.title} :
                      </div>
                      <div className="job-listing-info mb-2 mt-3">
                        Open position: {job.openPositions} | {job.location} |{" "}
                        {job.experience}
                      </div>
                    </div>
                    <Link href={`/career/${job.id}`} className="nav-link">
                      <button className="apply-now-btn  mt-4 mt-md-0">
                        Apply now
                      </button>
                    </Link>
                  </div>
                  {idx < jobs.length - 1 && (
                    <hr className="job-listing-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="career-benefits-section  py-0 py-md-5">
          <h2 className="career-benefits-title mb-4">Career Benefits</h2>
          <div className="row mt-0 mt-mx-2 gy-2 gy-md-4 gx-3 justify-content-start">
            {careerBenefitsData.map((benefit, idx) => (
              <div className="col-12 col-md-6 col-lg-4 d-flex" key={idx}>
                <div className="career-benefit-card ">
                  <div className="career-benefit-title mb-2">
                    {benefit.title}
                  </div>
                  <div className="career-benefit-desc mt-1">
                    {benefit.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EnquirySection */}

        <section className="enquiry-section py-1 py-md-5 mb-2">
          <div className="row g-2 g-md-4 justify-content-between align-items-center">
            {/* Left Image */}
            <div className="col-12 col-lg-7 d-flex justify-content-center">
              <div className="enquiry-image-wrapper m-2 m-md-0">
                <img
                  src="/assets/Images/19d499fa1df89f3a572901ceecffaeb87b6dce3d.jpg"
                  alt="Eye Care Clinic"
                  className="img-fluid enquiry-image"
                />
              </div>
            </div>
            {/* Right Form */}
            <div className="col-12 col-lg-5 d-flex justify-content-end">
              <div className="enquiry-form-card px-4 py-4 w-100">
                <h2 className="enquiry-form-title mb-4 text-center">
                  Enquire Now
                </h2>
                <form>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control enquiry-input"
                      placeholder="Full Name"
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      className="form-control enquiry-input"
                      placeholder="Email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-2">
                    <div className="input-group enquiry-phone-group">
                      <span className="input-group-text enquiry-phone-prefix">
                        +91
                      </span>
                      <input
                        type="tel"
                        className="form-control enquiry-input enquiry-phone-input"
                        placeholder="Phone number"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <select className="form-select enquiry-input">
                      <option>
                        Prefered Location
                        <span>
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </option>
                      <option>Nagercoil</option>
                      <option>Chennai</option>
                      <option>Madurai</option>
                      <option>Tirunelveli</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control enquiry-input"
                      placeholder="Upload resume"
                      // Replace with a custom upload script if you want file selection
                      readOnly
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        document.getElementById("real-file-input").click()
                      }
                    />
                    <input
                      type="file"
                      id="real-file-input"
                      style={{ display: "none" }}
                      // handle file logic here
                    />
                  </div>
                  <button type="submit" className="enquiry-submit-btn w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
