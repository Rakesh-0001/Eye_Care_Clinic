"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PatientCare() {
  const reviews = [
    {
      name: "Relax Smile",
      image: "/assets/Images/Rectangle 133.png",
      rating: 4.6,
      review:
        "Our doctors provide expert medical advice and consultation for all your eye care needs. Get in touch with our team to discuss your vision.",
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
    <section className="review-section-container py-4">
      <div className="container mb-4">
        <div className="review-desc">
          <p>
            At Bejan Singh Eye Hospital, our team of expert ophthalmologists is
            dedicated to providing trusted, personalized eye care across a wide
            range of specialties. Each doctor brings years of experience,
            advanced training, and a compassionate approach to ensure the best
            outcomes for every patient. Whether it's a routine check-up or a
            complex procedure, you're in safe, capable hands.
            <br />
            <br />
            Our mission is to restore and protect your vision with unwavering
            dedication and world-class expertise. Staying at the forefront of
            innovation in ophthalmology, our doctors are often
            fellowship-trained, involved in clinical research, and have
            successfully performed thousands of procedures. Above all, Your
            sight, your comfort, and your confidence are our highest priorities
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
                  <div className="review-card-title ms-4">{review.name}</div>
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
  );
}
