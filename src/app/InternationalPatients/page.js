"use client";
import Image from "next/image";
import { useState } from "react";

const treatments = [
  {
    type: "text",
    heading: "cataract surgery",
    desc: (
      <>
        Our doctors provide expert{" "}
        <span className="font-bold">medical advice</span> and consultation for
        all your eye care needs.
        <br />
        Needs. Get in touch with our team to discuss.
        <br />
        <span className="treatment-location">• Nagercoil, tamilnadu</span>
      </>
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

export default function InternationalPatients() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="blog-section">
      <div className="container">
        <section className="contact-header">
          <div className="container mt-3">
            <h1 className="contact-title-custom text-end mb-1">
              <span className="contact-heading-green">International </span>{" "}
              <span className="contact-heading-white">Patients</span>
            </h1>
          </div>
        </section>
        <div className="container">
          <div className="contact-page-breadcrumb mb-4 me-3">
            <span>• International Patients</span>
          </div>
        </div>

        <section className="hospital-about-section py-3">
          <div className="">
            {/* <div className="hospital-about-content">
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
            </div> */}
          </div>
        </section>

        <section className="advanced-treatments-section py-5">
          <div className="container">
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
                  <div className="treatment-card-heading">
                    {treatments[0].heading}
                  </div>
                  <div className="treatment-card-desc">
                    {treatments[0].desc}
                  </div>
                  {hoverIndex === 0 && (
                    <div className="treatment-card-hover-content">
                      <div className="treatment-card-heading">
                        {treatments[0].heading}
                      </div>
                      <div className="treatment-card-desc">
                        {treatments[0].desc}
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
                      <div className="treatment-card-heading">
                        {treatments[1].heading}
                      </div>
                      <div className="treatment-card-desc">
                        {treatments[0].desc}
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
                      <div className="treatment-card-heading">
                        {treatments[2].heading}
                      </div>
                      <div className="treatment-card-desc">
                        {treatments[0].desc}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Bottom wide image card */}
              <div
                className="treatments-figma-image wide"
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
                      <div className="treatment-card-heading">
                        {treatments[3].heading}
                      </div>
                      <div className="treatment-card-desc">
                        {treatments[0].desc}
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
                        <div className="treatment-card-heading">
                          {treatments[idx].heading}
                        </div>
                        <div className="treatment-card-desc">
                          {treatments[0].desc}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  */}

  
      </div>
    </section>
  );
}
