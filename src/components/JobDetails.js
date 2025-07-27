// components/JobDetails.js
import React from "react";
import Link from "next/link";
import jobOpeningsData from "../Datas/jobOpeningsData.js"; // Adjust the import path as necessary

const JobDetails = ({ job }) => {
  const details = jobOpeningsData[job.id] || {
    description: "Detailed description not available",
    qualifications: [],
    experience: "",
  };

  return (
    <section className="job-details-section py-5">
      <div className="container">
        <Link href="/career" className="back-link nav-link mb-4">
          <span>. Careers </span> &gt; <span>{job.category} </span> &gt;{" "}
          <span>{job.title} </span>
        </Link>

        <div className="job-meta mb-4 d-flex flex-wrap gap-2">
          <button className="border border-success rounded-2 p-1 job-details px-3">
            {job.location}
          </button>
          <button className="border border-success rounded-2 p-1 job-details px-3">
            {job.experience}
          </button>
          <button className="border border-success rounded-2 p-1 job-details px-3">
            Open positions : {job.openPositions}
          </button>
        </div>

        <div>
          <span className="job-date mb-4">Posted at : 2/2/2025</span>
        </div>

        <h1 className="job-details-title mt-3 mb-4">{job.title}</h1>

        <div className="job-description mb-4">
          <p>{details.description}</p>
        </div>

        <div className="job-qualifications mb-3">
          <h2 className="section-title ">Qualifications & Experience: </h2>
          <p className="Qulification-text ">{job.Qualifications_Experience}</p>
        </div>

        <div className="job-qualifications mb-3">
          <h2 className="section-title">Education Qulification: </h2>
          <ul>
            {details.qualifications.map((qual, index) => (
              <li key={index} className="Qulification-text">
                {qual}
              </li>
            ))}
          </ul>
        </div>

        <div className="job-experience mb-5">
          <h2 className="section-title">Experience</h2>
          <p className="Qulification-text">{details.experience}</p>
        </div>

        <div className="apply-section">
          <div className="enquiry-form-card px-4 py-2 w-100">
            <h2
              className="enquiry-form-title mb-4 text-start"
              style={{ color: "#00A876" }}
            >
              Apply Now
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
                  // onClick={() =>
                  //   document.getElementById("real-file-input").click()
                  // }
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
  );
};

export default JobDetails;
