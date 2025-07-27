"use client";
import React, { useState } from "react";
import { Doctors } from "../../Datas/Doctors-Data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Helper function: split doctors into groups of 3
function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export default function doctor() {
  const locations = [...new Set(Doctors.map((doc) => doc.location))];
  const specializations = [
    ...new Set(Doctors.map((doc) => doc.specialization)),
  ];

  const [location, setLocation] = useState("Nagercoil");
  const [specialization, setSpecialization] = useState("");
  const [filtered, setFiltered] = useState(
    Doctors.filter((d) => d.location === "Nagercoil")
  );
  const [selected, setSelected] = useState(filtered[0]);

  const handleSearch = () => {
    const result = Doctors.filter(
      (d) =>
        (location ? d.location === location : true) &&
        (specialization ? d.specialization === specialization : true)
    );
    setFiltered(result);
    setSelected(result[0]);
  };

  // Split doctors into rows of 3
  const doctorRows = chunkArray(filtered, 3);

  const reviews = [
    {
      name: "Relax Smile",
      image: "/assets/Images/Rectangle 133.png",
      rating: 4.6,
      review:
        "Our doctors provide expert medical advice and consultation for all your eye care needs.  discuss your vision.",
      bold: "medical advice",
    },
    {
      name: "Relax Smile",
      image: "/assets/Images/Rectangle 133.png",
      rating: 4.6,
      review:
        "We offer the latest in eye care technology and treatments. Expert doctors, advanced diagnostics, and compassionate service.",
      bold: "eye care technology",
    },
    {
      name: "Relax Smile",
      image: "/assets/Images/Rectangle 133.png",
      rating: 4.6,
      review:
        "Our ophthalmologists are fellowship-trained and trusted by thousands of patients. Experience world-class care for your eyes.",
      bold: "world-class care",
    },
    {
      name: "Relax Smile",
      image: "/assets/Images/Rectangle 133.png",
      rating: 4.6,
      review:
        "From routine check-ups to complex procedures, we ensure your comfort and confidence with every visit.",
      bold: "comfort and confidence",
    },
    {
      name: "Relax Smile",
      image: "/assets/Images/Rectangle 133.png",
      rating: 4.6,
      review:
        "Our team specializes in innovative treatments and personalized care for all ages.",
      bold: "personalized care",
    },
    {
      name: "Relax Smile",
      image: "/assets/Images/Rectangle 133.png",
      rating: 4.6,
      review:
        "Thousands of successful procedures and happy patients. Trust us with your sight.",
      bold: "successful procedures",
    },
  ];

  return (
    <section className="blog-section ">
      <div className="container ">
        <section className="contact-header ">
          <div className="container mt-3">
            <h1 className="contact-title-custom text-end mb-1">
              <span className="contact-heading-green">Doctor</span>{" "}
            </h1>
          </div>
        </section>
        <div className="container container_ ">
          <div className="contact-page-breadcrumb ms-3">
            <span>• Doctor</span>
          </div>
        </div>

        <section className="doctor-hero-section py-5">
          <div className="container">
            <div className="row">
              {/* Left Column: Title and Description */}
              <div className="col-lg-8 col-md-10 col-12">
                <h1 className="doctor-hero-title mb-3">
                  Trusted Hands Behind
                  <br />
                  Your Eye Health
                </h1>
                <p className="doctor-hero-desc">
                  Connect with the right specialist—pick your location and
                  speciality for expert care suited to your vision needs. Easily
                  find your perfect eye specialist—just choose your nearest
                  location and filter by speciality to get expert care
                  customized to your vision needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <div className="d-flex justify-content-center align-items-center mt-3 mb-4">
          <div className="search-container d-flex  align-items-center px-3 py-2">
            <div className="input-group job-search-input-wrapper d-flex align-items-center flex-grow-1 ">
              <span
                className="input-group-text border-none shadow-none "
                id="basic-addon1"
              >
                <i className="bi bi-geo-alt job-search-location-icon"></i>
              </span>

              <select
                className="form-select border-0 shadow-none mx-2"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group job-search-input-wrapper d-flex align-items-center flex-grow-1 ">
              <select
                className="form-select border-0 shadow-none mx-2"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              >
                <option value="">Specialization</option>
                {specializations.map((sp) => (
                  <option key={sp} value={sp}>
                    {sp}
                  </option>
                ))}
              </select>
            </div>
            <button
              className=" job-search-btn d-flex justify-content-between align-items-center "
              type="button"
              onClick={handleSearch}
            >
              <i className="bi bi-search me-3"></i>
              Search
            </button>
          </div>
        </div>

        {/* First 3 doctors */}

        <div className="container mx-auto mb-2 py-4 mt-4">
          {/* Location & Address */}
          <h1 className="location-title ">{location || "Nagercoil"}</h1>
          {filtered[0] && (
            <div className="address-text">{filtered[0].address}</div>
          )}
        </div>

        <div className="container mx-auto mb-4 py-4 mt-2">
          {doctorRows.map((row, rowIdx) => (
            <div className="doctor-list-row mb-3" key={rowIdx}>
              {row.map((doc) => (
                <div
                  key={doc.id}
                  className={`doctor-card-col${
                    selected?.id === doc.id ? " expanded" : ""
                  }`}
                >
                  {selected?.id === doc.id ? (
                    <div className="doctor-card doctor-card-row d-flex flex-row">
                      <div className="doctor-card-image">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="doctor-img"
                        />
                        <div className="arrow-box">
                          <button
                            className="arrow-btn"
                            onClick={() => setSelected(null)}
                          >
                            <img
                              src="/assets/Images/arrow_forward.png"
                              alt="arrow"
                              className="arrow-icon"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="doctor-details-split">
                        <div>
                          <div className="doctor-name">{doc.name}</div>
                          <div className="doctor-qual">{doc.qualification}</div>
                        </div>
                        <div>
                          <div className="doctor-designation">
                            {doc.designation}
                          </div>
                          <div className="doctor-more">{doc.details}</div>
                          <button className="Book-appointment border-0 mt-3">
                            Book appointment
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="doctor-card">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="doctor-img"
                      />
                      <div className="arrow-box">
                        <button
                          className="arrow-btn"
                          onClick={() => setSelected(doc)}
                        >
                          <img
                            src="/assets/Images/arrow_forward.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <section className="review-section-container py-4">
          <div className="container mb-4">
            <div className="review-desc">
              <p>
                At Bejan Singh Eye Hospital, our team of expert ophthalmologists
                is dedicated to providing trusted, personalized eye care across
                a wide range of specialties. Each doctor brings years of
                experience, advanced training, and a compassionate approach to
                ensure the best outcomes for every patient. Whether it's a
                routine check-up or a complex procedure, you're in safe, capable
                hands.
                <br />
                <br />
                Our mission is to restore and protect your vision with
                unwavering dedication and world-class expertise. Staying at the
                forefront of innovation in ophthalmology, our doctors are often
                fellowship-trained, involved in clinical research, and have
                successfully performed thousands of procedures. Above all, Your
                sight, your comfort, and your confidence are our highest
                priorities
              </p>
            </div>
          </div>
          <div className="container mb-3 mt-4">
            <div className="review-title">Review</div>
          </div>
          <div className="container">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={3}
              navigation={{
                nextEl: ".review-swiper-next",
                prevEl: ".review-swiper-prev",
              }}
              pagination={{
                el: ".review-swiper-pagination",
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="review-dot ${className}"></span>`,
              }}
              breakpoints={{
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {reviews.map((review, idx) => (
                <SwiperSlide key={idx}>
                  <div className="review-card mx-auto">
                    <div className="review-rating w-100 d-flex justify-content-end align-items-center">
                      <span>{review.rating}</span>
                      <i className="bi bi-star-fill review-star ms-1"></i>
                    </div>
                    <div className="d-flex align-items-around align-items-center mb-2">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="review-card-img"
                      />
                      <div className="review-card-title ms-4">
                        {review.name}
                      </div>
                    </div>
                    <div className="review-card-text">
                      {review.review.split(review.bold)[0]}
                      <span className="fw-bold review-bold">{review.bold}</span>
                      {review.review.split(review.bold)[1]}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Custom arrows */}
              <div className="d-flex justify-content-center align-items-center mt-4">
                <button
                  className="review-arrow-btn review-swiper-prev me-2"
                  aria-label="Previous"
                >
                  <img
                    src="/assets/Images/left-arrow.png"
                    alt="left"
                    className="review-arrow-img"
                  />
                </button>

                <button
                  className="review-arrow-btn review-swiper-next ms-2"
                  aria-label="Next"
                >
                  <img
                    src="/assets/Images/right-arrow.png"
                    alt="right"
                    className="review-arrow-img"
                  />
                </button>
              </div>
            </Swiper>
          </div>
        </section>
      </div>
    </section>
  );
}
