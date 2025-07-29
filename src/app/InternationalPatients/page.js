"use client";
import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";

const treatments = [
  {
    type: "text",
    heading: "cataract surgery",
    desc: (
      <div className="treatment-card-desc-container">
        <div>
          Our doctors provide expert{" "}
          <span className="font-bold">medical advice</span> and consultation for
          all your eye care needs.
          <br />
          Needs. Get in touch with our team to discuss.
        </div>
      </div>
    ),
    Loc: (
      <div>
        <span className="treatment-location">• Nagercoil, tamilnadu</span>
      </div>
    ),
  },
  {
    heading: "Corneal Transplant",
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
  },
  {
    heading: "Oculoplasty & Cosmetic Eye Surgery",
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
  },
  {
    heading: "Pediatric Eye Care & Squint Correction",
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
  },
  {
    heading: "Refractive surgery",
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
  },
  {
    heading: "Retina Treatment",
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
  },
  {
    heading: "Glaucoma Treatment and surgery",
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
  },
];

const services = [
  {
    title: "Pre-Travel Coordination",
    image: "/assets/Images/International-Patients-Images/2.jpg",
    content: (
      <ul className="services-list">
        <li>Online consultations with ophthalmologists</li>
        <li>Review of medical reports and case history</li>
        <li>Personalized treatment plan with transparent cost estimate</li>
        <li>Visa assistance and medical invitation letter</li>
      </ul>
    ),
  },
  {
    title: "Travel & Accommodation Support",
    image: "/assets/Images/International-Patients-Images/5.jpg",

    content: (
      <ul className="services-list">
        <li>Online consultations with ophthalmologists</li>
        <li>Review of medical reports and case history</li>
        <li>Personalized treatment plan with transparent cost estimate</li>
        <li>Visa assistance and medical invitation letter</li>
      </ul>
    ),
  },
  {
    title: "Admission & Personalized Care",
    image: "/assets/Images/International-Patients-Images/4.jpg",

    content: (
      <ul className="services-list">
        <li>Online consultations with ophthalmologists</li>
        <li>Review of medical reports and case history</li>
        <li>Personalized treatment plan with transparent cost estimate</li>
        <li>Visa assistance and medical invitation letter</li>
      </ul>
    ),
  },
  {
    title: "Advanced Treatment & In-Hospital Support",
    image: "/assets/Images/International-Patients-Images/1.jpg",

    content: (
      <ul className="services-list">
        <li>Online consultations with ophthalmologists</li>
        <li>Review of medical reports and case history</li>
        <li>Personalized treatment plan with transparent cost estimate</li>
        <li>Visa assistance and medical invitation letter</li>
      </ul>
    ),
  },
  {
    title: "Discharge, Recovery & Follow-Up",
    image: "/assets/Images/International-Patients-Images/3.jpg",

    content: (
      <ul className="services-list">
        <li>Online consultations with ophthalmologists</li>
        <li>Review of medical reports and case history</li>
        <li>Personalized treatment plan with transparent cost estimate</li>
        <li>Visa assistance and medical invitation letter</li>
      </ul>
    ),
  },
];

const hospitals = [
  {
    name: "Main Hospital – Vettoornimadam, Nagercoil",
    address: "2, 313C, MS Road, Vetturnimadam, Nagercoil, Tamil Nadu 629003",
    email: "Info@bseh.org",
    opening: "Open 24 hours, every day",
    phone: "04652 237 491",
    map: "https://maps.google.com/?q=8.1824,77.4107",
  },
  {
    name: "Branch Hospital 1 – Marthandam, Nagercoil",
    address: "864G+4MW, Pammam, Marthandam, Tamil Nadu 629165",
    opening: "Open 24 hours, every day",
    phone: "04652 237 491",
    map: "https://maps.google.com/?q=8.3131,77.2176",
  },
  {
    name: "Branch Hospital 2 – Vallioor, Tirunelveli",
    address:
      "27, Main Road, Opposite TMB Bank, Vadakku Valliyur, Valliyur, Tamil Nadu 627117",
    opening: (
      <>
        Monday to Saturday – 9:00 AM to 8:00 PM <br />
        Sunday – 10:00 AM to 1:00 PM
      </>
    ),
    phone: "04637 220 212",
    map: "https://maps.google.com/?q=8.3850,77.6161",
  },
];

export default function InternationalPatients() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [openIdx, setOpenIdx] = useState(0);
  const formRef = useRef();

  return (
    <section className="contact-content-section ">
      <section className="contact-header ">
        <div className="container mt-3">
          <h1 className="contact-title-custom text-end mb-1">
            <span className="contact-heading-green">International </span>{" "}
            <span className="contact-heading-white">Patients</span>
          </h1>
        </div>
      </section>
      <div className="container container_ py-5 ">
        <div className="contact-page-breadcrumb ms-1 ms-md-0">
          <span>• International Patients</span>
        </div>

        <section className="hospital-about-section py-1 py-md-3">
          <div className="">
            <div className="hospital-about-content">
              <p className="hospital-about-paragraph mb-1">
                <span className="hospital-about-bold">
                  Bejan Singh Eye Hospital
                </span>{" "}
                is a premier super-specialty eye care center located in
                Nagercoil, Tamil Nadu, Founded by{" "}
                <span className="hospital-about-bold">
                  Dr. S.M. Bejan Singh in 1992
                </span>
                . Our team of highly qualified ophthalmologists, optometrists,
                and healthcare professionals provide personalized treatment
                using globally approved protocols.
              </p>
              <p className="hospital-about-paragraph">
                We are proud to be a trusted center for{" "}
                <span className="hospital-about-bold">
                  international patients
                </span>{" "}
                seeking advanced and affordable eye care in India, located in
                the South Tamil Nadu.
              </p>
            </div>
          </div>
        </section>

        <section className="advanced-treatments-section py-5">
          <div className="">
            <h2 className="advanced-treatments-title mb-5">
              Advanced & Affordable
              <br /> Eye Treatments
            </h2>
            <div className="treatments-figma-grid mt-5">
              {/* Left green card */}
              <div
                className="treatments-figma-green"
                onMouseEnter={() => setHoverIndex(0)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="treatment-card-green">
                  <div>
                    <div className="treatment-card-heading">
                      {treatments[0].heading}
                    </div>
                    <div className="treatment-card-desc">
                      {treatments[0].desc}
                    </div>
                  </div>

                  <div>
                    <div className="treatment-card-desc">
                      {treatments[0].Loc}
                    </div>
                  </div>
                  {hoverIndex === 0 && (
                    <div className="treatment-card-hover-content">
                      <Image
                        src={treatments[1].image}
                        alt={treatments[1].heading}
                        fill
                        className="treatment-img"
                      />
                      <div className="treatment-card-heading_">
                        {treatments[0].heading}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Right grid */}
              {/* Tall image card */}
              <div
                className="treatments-figma-image tall"
                onMouseEnter={() => setHoverIndex(1)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="treatment-card-img">
                  <Image
                    src={treatments[1].image}
                    alt={treatments[1].heading}
                    fill
                    className="treatment-img"
                  />
                  <div className="treatment-card-img-heading">
                    {treatments[1].heading}
                  </div>

                  {hoverIndex === 1 && (
                    <div className="treatment-card-hover-content">
                      <div>
                        <div className="treatment-card-heading">
                          {treatments[1].heading}
                        </div>
                        <div className="treatment-card-desc">
                          {treatments[0].desc}
                        </div>
                      </div>
                      <div>
                        <div className="treatment-card-desc">
                          {treatments[0].Loc}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Top wide image card */}
              <div
                className="treatments-figma-image wide"
                onMouseEnter={() => setHoverIndex(2)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="treatment-card-img treatment-card-img-wide">
                  <Image
                    src={treatments[2].image}
                    alt={treatments[2].heading}
                    fill
                    className="treatment-img"
                  />
                  <div className="treatment-card-img-heading">
                    {treatments[2].heading}
                  </div>
                  {hoverIndex === 2 && (
                    <div className="treatment-card-hover-content">
                      <div>
                        <div className="treatment-card-heading">
                          {treatments[2].heading}
                        </div>
                        <div className="treatment-card-desc">
                          {treatments[0].desc}
                        </div>
                      </div>

                      <div>
                        <div className="treatment-card-desc">
                          {treatments[0].Loc}
                        </div>{" "}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Bottom wide image card */}
              <div
                className="treatments-figma-image wide mb-3 mb-md-0"
                onMouseEnter={() => setHoverIndex(3)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="treatment-card-img treatment-card-img-wide">
                  <Image
                    src={treatments[3].image}
                    alt={treatments[3].heading}
                    fill
                    className="treatment-img"
                  />
                  <div className="treatment-card-img-heading">
                    {treatments[3].heading}
                  </div>
                  {hoverIndex === 3 && (
                    <div className="treatment-card-hover-content">
                      <div>
                        <div className="treatment-card-heading">
                          {treatments[3].heading}
                        </div>
                        <div className="treatment-card-desc">
                          {treatments[0].desc}
                        </div>{" "}
                      </div>

                      <div>
                        <div className="treatment-card-desc">
                          {treatments[0].Loc}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="treatments-figma-bottom-row">
              {[4, 5, 6].map((idx) => (
                <div
                  key={idx}
                  className="treatments-figma-image bottom"
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className="treatment-card-img treatment-card-img-bottom">
                    <Image
                      src={treatments[idx].image}
                      alt={treatments[idx].heading}
                      fill
                      className="treatment-img"
                    />
                    <div className="treatment-card-img-heading">
                      {treatments[idx].heading}
                    </div>
                    {hoverIndex === idx && (
                      <div className="treatment-card-hover-content">
                        <div>
                          <div className="treatment-card-heading">
                            {treatments[idx].heading}
                          </div>
                          <div className="treatment-card-desc">
                            {treatments[0].desc}
                          </div>
                        </div>

                        <div>
                          <div className="treatment-card-desc">
                            {treatments[0].Loc}
                          </div>{" "}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="international-patient-services my-4">
          <div className="">
            <p className="international-patient-text">
              Our international patient services are designed to make medical
              travel to{" "}
              <span className="international-patient-bold">
                India for eye care safe and stress-free
              </span>
              , offering complete support and safety from arrival to recovery.
            </p>
          </div>
        </section>

        <section className="services-international-section py-5">
          <div className="">
            <h2 className="services-international-title mb-5">
              Services for <br />
              International Visitors
            </h2>
            <div className="services-accordion mt-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`services-accordion-card mb-4 ${
                    openIdx === idx ? "active" : ""
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(90deg, rgba(46,45,121,0.83) 0%, rgba(0,0,0,0) 100%), url('${service.image}')`,
                  }}
                  onClick={() => setOpenIdx(idx)}
                  tabIndex={0}
                  role="button"
                >
                  <div className="services-card-content d-flex justify-content-between align-items-start">
                    <div>
                      <div className="services-accordion-title">
                        {service.title}
                      </div>
                      {openIdx === idx && service.content && (
                        <div className="services-accordion-detail mt-2">
                          {service.content}
                        </div>
                      )}
                    </div>
                    <div className="services-arrow-container">
                      <i
                        className={`bi bi-arrow-up-right ${
                          openIdx === idx ? "" : "d-none"
                        }`}
                        style={{
                          width: 33,
                          height: 33,
                          fontSize: 18,
                          color: "#30e090",
                          transform:
                            openIdx === idx
                              ? "rotate(0deg)"
                              : " rotate(46.6deg) scale(1.2)",
                          transition:
                            "transform 0.3s cubic-bezier(.4,0,.2,1), color 0.3s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="row g-2 g-md-4 align-items-start mt-2">
          {/* LEFT */}
          <div className="col-lg-4">
            <div className="contact-panel-left p-0 p-md-2 h-100">
              <div className="mb-4">
                <h2 className="contact-big-title mb-4">
                  Our Hospital Locations in South India
                </h2>
                <p className="contact-side-desc mb-4">
                  Easily Accessible Branches for International Patients
                </p>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="col-lg-8">
            <div className="contact-info-card mb-4 p-1 p-md-4 rounded-4">
              {hospitals.map((h, i) => (
                <div key={h.name}>
                  <div className="row g-3">
                    <div className="col-8">
                      <div className="contact-hospital-title">{h.name}</div>
                      <div className="contact-hospital-address mt-3">
                        {h.address}
                      </div>
                      {h.email && (
                        <div className="contact-hospital-label">
                          email:{" "}
                          <span className="contact-hospital-email">
                            {h.email}
                          </span>
                        </div>
                      )}
                      <div className="contact-hospital-label">
                        <span>Opening Hours:</span>{" "}
                        <span className="contact-hospital-hours">
                          {h.opening}
                        </span>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="contact-hospital-phone-label">
                        Phone number
                      </div>
                      <div className="contact-hospital-phone-value">
                        {h.phone}
                      </div>
                      <a
                        href={h.map}
                        className="contact-hospital-map-link d-block mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View location in map
                      </a>
                    </div>
                  </div>
                  {i < hospitals.length - 1 && <hr className="my-3" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="clinic-testimonial-section py-5">
          <div className="">
            <div className="row align-items-center justify-content-center">
              {/* Left Side – Circles */}
              <div className="col-lg-5 d-flex justify-content-center align-items-center">
                <div className="clinic-circles-wrapper">
                  <div className="clinic-circle small-1"></div>
                  <div className="clinic-circle small-2"></div>
                  <div className="clinic-circle medium"></div>
                  <div className="clinic-circle small-3"></div>
                  <div className="clinic-circle small-4"></div>
                </div>
              </div>
              {/* Center – Timeline */}
              <div className="col-lg-2 d-flex justify-content-center align-items-center">
                <div className="clinic-timeline-vertical">
                  <div className="timeline-line"></div>
                  <div className="timeline-dot top"></div>
                  <div className="timeline-dot"></div>
                  <div className="timeline-dot"></div>
                  <div className="timeline-dot active"></div>
                  <div className="timeline-dot bottom"></div>
                </div>
              </div>
              {/* Right Side – Content */}
              <div className="col-lg-5 ">
                <div className="clinic-testimonial-content ">
                  <div>
                    <div className="clinic-testimonial-quote mb-2">
                      <i className="bi bi-quote" />
                    </div>
                  </div>
                  <div>
                    <div className="clinic-testimonial-address mb-2">
                      27, Main Road, Opposite TMB Bank, Vadakku Valliyur,
                      Valliyur, Tamil Nadu 627117,
                      <span className="fw-bold"> Opening Hours:</span>
                      <br />
                      Monday to Saturday – 9:00 AM to 8:00 PM
                      <br />
                      Sunday – 10:00 AM to 1:00 PM
                    </div>
                    <div className="clinic-testimonial-date mb-1">
                      02/04/2025
                    </div>
                    <div className="clinic-testimonial-title mb-1">
                      Relax Smile
                    </div>
                    <div className="clinic-testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill star-icon" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="international-form-section py-5">
          <div className="international-form-bg-wrapper">
            <div className="international-form-bg-img" />
            <div className="international-form-overlay" />
            <div className="international-form-card ">
              <form ref={formRef} className="international-form-inner">
                <input
                  type="text"
                  className=" international-form-custom-input rounded mb-3"
                  placeholder="Name"
                />
                <input
                  type="number"
                  className=" international-form-custom-input mb-3"
                  placeholder="Age"
                />
                <select className=" international-form-custom-input mb-3 ">
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

              

                <input
                  type="tel"
                  className=" international-form-custom-input mb-3"
                  placeholder="phone number"
                />
                <select className=" international-form-custom-input mb-3">
                  <option value="">Select treatment</option>
                  <option>Cataract Surgery</option>
                  <option>Corneal Transplant</option>
                  <option>Oculoplasty & Cosmetic Eye Surgery</option>
                  <option>Pediatric Eye Care & Squint Correction</option>
                  <option>Refractive Surgery</option>
                  <option>Retina Treatment</option>
                  <option>Glaucoma Treatment and Surgery</option>
                </select>
                <input
                  type="email"
                  className=" international-form-custom-input mb-3"
                  placeholder="Email id"
                />
                <div className="custom-file-upload mb-3">
                  <label>Upload passport</label>
                  <input
                    type="file"
                    className=" international-form-custom-input"
                  />
                </div>
                <div className="custom-file-upload mb-3">
                  <label>Upload medical report</label>
                  <input
                    type="file"
                    className=" international-form-custom-input"
                  />
                </div>
                <textarea
                  className=" international-form-custom-input custom-message"
                  placeholder="Message"
                  rows={2}
                />
                <div className="form-terms mb-2">
                  By submitting this form, I agree to Bejan Singh Eye Hospital's
                  Terms & Conditions and Privacy Policy. I consent to receive
                  updates and notifications via Email, WhatsApp and SMS.
                </div>
                <button type="submit" className="form-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/*  */}
    </section>
  );
}
