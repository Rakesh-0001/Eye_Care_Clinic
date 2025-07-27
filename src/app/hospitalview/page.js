"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const facilities = [
  { number: "01", desc: "2/313C, Vettoornimadam, Nagercoil," },
  { number: "02", desc: "2/313C, Vettoornimadam, Nagercoil," },
  { number: "03", desc: "2/313C, Vettoornimadam, Nagercoil," },
  { number: "04", desc: "2/313C, Vettoornimadam, Nagercoil," },
  { number: "05", desc: "2/313C, Vettoornimadam, Nagercoil," },
  { number: "06", desc: "2/313C, Vettoornimadam, Nagercoil," },
];

const relatedBlogs = [
  {
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
    date: "02/04/2025",
    title: "Relax Smile",
    category: "Cataract",
    description:
      "Our doctors provide expert medical advice and consultation for all your eye care needs. Get in touch with our team to discuss.",
    readMore: "Read more",
  },
  {
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
    date: "03/04/2025",
    title: "Painless Vision",
    category: "Lasik",
    description:
      "We offer advanced solutions for vision correction and eye health. Contact our specialists for a personalized consultation.",
    readMore: "Read more",
  },
  {
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
    date: "04/04/2025",
    title: "Modern Eye Care",
    category: "Retina",
    description:
      "Experience comprehensive care for all retinal conditions from our expert doctors. Schedule your appointment today.",
    readMore: "Read more",
  },
  {
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
    date: "04/04/2025",
    title: "Modern Eye Care",
    category: "Retina",
    description:
      "Experience comprehensive care for all retinal conditions from our expert doctors. Schedule your appointment today.",
    readMore: "Read more",
  },
  {
    image: "/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg",
    date: "04/04/2025",
    title: "Modern Eye Care",
    category: "Retina",
    description:
      "Experience comprehensive care for all retinal conditions from our expert doctors. Schedule your appointment today.",
    readMore: "Read more",
  },
];

const doctors = [
  {
    image: "/assets/Images/Doctors-Images/Dr_1.png",
    name: "Dr. Bejan singh",
    role: "Pediatric Dentist",
    schedule: "Mon to Fri 4pm to 6am",
    desc: "University of Southern California (USC), 10 years of experience specializing in braces.",
    icons: ["bi-facebook", "bi-instagram", "bi-linkedin"],
  },
  {
    image: "/assets/Images/Doctors-Images/Dr_2.png",
    name: "Dr. Emily Turner",
    role: "Lead Dentist & Cosmetic Specialist",
    schedule: "Mon to Fri 9am to 5pm",
    desc: "Certified in Advanced Cosmetic Dentistry. Over 12 years of experience in cosmetic dental care.",
    icons: ["bi-facebook", "bi-instagram", "bi-linkedin"],
  },
  {
    image: "/assets/Images/Doctors-Images/Dr_3.png",
    name: "Dr. Michael Anderson",
    role: "Restorative & Implant Specialist",
    schedule: "Mon to Sat 10am to 7pm",
    desc: "Fellowship in Implant Dentistry, ICOI, 15 years of experience in dental implants.",
    icons: ["bi-facebook", "bi-instagram", "bi-linkedin"],
  },
  {
    image: "/assets/Images/Doctors-Images/Dr_4.png",
    name: "Dr. Michael Anderson",
    role: "Restorative & Implant Specialist",
    schedule: "Mon to Sat 10am to 7pm",
    desc: "Fellowship in Implant Dentistry, ICOI, 15 years of experience in dental implants.",
    icons: ["bi-facebook", "bi-instagram", "bi-linkedin"],
  },
];

const testimonials = [
  {
    text: "Our doctors provide expert medical advice and consultation for all your eye care needs. Get in touch with our team to discuss.",
    name: "Relax Smile",
    profile: "/assets/Images/Customer_tes_profile.jpg",
    rating: "4.6",
  },
  {
    text: "Our doctors provide expert medical advice and consultation for all your eye care needs. Get in touch with our team to discuss.",
    name: "Relax Smile",
    profile: "/assets/Images/Customer_tes_profile.jpg",
    rating: "4.6",
  },
];

const customerImages = [
  "/assets/Images/Customer_tes_profile.jpg",
  "/assets/Images/Customer_tes_profile.jpg",
  "/assets/Images/Customer_tes_profile.jpg",
  "/assets/Images/Customer_tes_profile.jpg",
  "/assets/Images/Customer_tes_profile.jpg",
  "/assets/Images/Customer_tes_profile.jpg",
  "/assets/Images/Customer_tes_profile.jpg",
];

export default function hospitalview() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    date: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section className="blog-section">
      <div className="container">
        <section className="contact-header">
          <div className="container mt-3">
            <h1 className="contact-title-custom text-end mb-1">
              <span className="contact-heading-green">hospital View</span>
            </h1>
          </div>
        </section>
        <div className="container">
          <div className="contact-page-breadcrumb mb-4 ms-3">
            <span>• hospital</span>
          </div>
        </div>

        <section className="best-eye-hospital-section py-4">
          <div className="container">
            {/* Section Title & Description */}
            <div className="mb-2">
              <h2 className="beh-title">
                <span className="beh-title-green">Best eye hospital</span> in{" "}
                <span className="beh-title-blue">nagercoil</span>
              </h2>
              <p className="beh-desc mb-3">
                Our doctors provide expert{" "}
                <span className="fw-bold">medical advice</span> and consultation
                for all your eye care needs. Get in touch with our team to
                discuss.
              </p>
            </div>
            {/* Grid Row */}
            <div className="row g-3 mt-4 d-flex align-items-stretch">
              {/* Left Main Image */}
              <div className="col-lg-7 col-md-12">
                <div className="beh-main-img-container ">
                  <div>
                    <Image
                      src="/assets/Images/Hospital-view.png"
                      alt="Main hospital view"
                      width={713}
                      height={565}
                      className="beh-main-img"
                      style={{
                        borderRadius: 20,
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="beh-rightside-img-container">
                    <Image
                      src="/assets/Images/Hospital-view-rightside.jpg"
                      alt="Hospital rightside"
                      width={150}
                      height={250}
                      className="beh-corner-img"
                    />
                  </div>
                </div>
              </div>
              {/* Right Side (Images + Content) */}
              <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-between">
                <div className="d-flex flex-row gap-3 mb-3">
                  {/* Top Right Image */}

                  {/* Top Right Large Image */}
                  <div className="beh-img-large-top">
                    <Image
                      src="/assets/Images/Hospital-view-corner.jpg"
                      alt="Hospital top right"
                      width={531}
                      height={225}
                      className="beh-topright-img"
                    />
                  </div>
                </div>
                {/* Bottom Content Card */}
                <div className="beh-content-card  d-flex flex-row align-items-stretch">
                  <div className="beh-content-left flex-grow-1 px-3 py-3 d-flex flex-column justify-content-between">
                    {/* Location Title & Desc */}
                    <div>
                      <div className="beh-location-title mb-1">Location</div>
                      <div className="beh-location-desc mb-2">
                        Our doctors provide expert{" "}
                        <span className="fw-bold">medical advice</span> and
                        consultation for all your eye care needs. Get in touch
                        with our team to discuss.
                      </div>
                      {/* Stars + Review */}
                      <div className="d-flex align-items-center mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className="bi bi-star-fill beh-star-icon"
                          />
                        ))}
                        <span className="beh-customers ms-2">
                          2k Happy customers
                        </span>
                      </div>
                    </div>
                    <div className="w-100 d-flex justify-content-between align-items-center">
                      {/* Working Hours */}
                      <div>
                        <div className="beh-working-title mb-1">
                          Working hours
                        </div>
                        <div className="beh-working-hours mb-2">
                          Mon to sun | 3pm to 4am
                        </div>
                      </div>
                      {/* Button + Arrow */}
                      <div className="d-flex align-items-center justify-content-end ">
                        <div className="Get-direction-btn">
                          <div>
                            <a
                              href="/assets/docs/ApplicationForm.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="nav-link"
                            >
                              Get direction{" "}
                            </a>
                          </div>
                          <div className="Get-direction-icon-wrapper">
                            <i className="bi bi-arrow-up-right download-icon " />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Spacer for right alignment on large screens */}
                  <div style={{ minWidth: "16px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="facilities-section py-4">
          <div className="container">
            <h2 className="facilities-title mb-5">Facilities</h2>
            <div className="row ">
              {facilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="col-lg-4 col-md-6 col-12 mb-4 d-flex align-items-center"
                >
                  <span className="facilities-number mb-3 d-flex align-items-center justify-content-center me-3">
                    {facility.number}
                  </span>
                  <span className="facilities-desc">{facility.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="hospital-description-section py-3">
          <div className="container">
            <h2 className="hospital-desc-title mb-3">Description</h2>
            <div className="hospital-desc-content mt-2">
              2/313C, Vettoornimadam, Nagercoil, 2/313C, Vettoornimadam, <br />
              Nagercoil, 2/313C, Vettoornimadam, Nagercoil, 2/313C, <br />
              Vettoornimadam, Nagercoil, 2/313C, Vettoornimadam, Nagercoil,
            </div>
          </div>
        </section>

        <section className="related-blogs-section py-4">
          <div className="container">
            <h2 className="related-blogs-title mb-5">Related blogs</h2>
            <div className="position-relative">
              {/* Swiper arrows */}
              <button className="related-blog-arrow related-blog-arrow-left">
                <i className="bi bi-arrow-left" />
              </button>
              <button className="related-blog-arrow related-blog-arrow-right">
                <i className="bi bi-arrow-right" />
              </button>
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".related-blog-arrow-right",
                  prevEl: ".related-blog-arrow-left",
                }}
                spaceBetween={28}
                slidesPerView={1}
                breakpoints={{
                  900: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                className="related-blogs-swiper"
              >
                {relatedBlogs.map((blog, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="related-blog-card d-flex">
                      {/* Image Half */}
                      <div className="related-blog-img-wrap">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={252}
                          height={304}
                          className="related-blog-img"
                        />
                      </div>
                      {/* Content Half */}
                      <div className="related-blog-content-wrap d-flex flex-column justify-content-between px-2 py-4">
                        <div>
                          <div className="related-blog-date mb-1">
                            {blog.date}
                          </div>
                          <div className="related-blog-title mb-1">
                            {blog.title}
                          </div>
                          <div className="related-blog-category mb-2">
                            {blog.category}
                          </div>
                          <div className="related-blog-desc mb-2">
                            {blog.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <section className="hospital-appointment-section mt-4 py-5">
          <div className="container position-relative">
            <div className="hospital-appointment-bg-wrap">
              <Image
                src="/assets/Images/Hospital-view-from-background.jpg"
                alt="Hospital background"
                width={100}
                height={500}
                className="hospital-appointment-bg"
              />
              <div className="hospital-appointment-form-container">
                <form className="hospital-appointment-form">
                  <input
                    type="text"
                    name="name"
                    className="hospital-form-input"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="mobile"
                    className="hospital-form-input"
                    placeholder="Mobile number"
                    value={form.mobile}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    className="hospital-form-input"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                  />

                  <input
                    type="date"
                    name="date" // must match your state
                    className="hospital-form-input"
                    placeholder="Appointment date" // will NOT show for type="date"
                    value={form.date}
                    onChange={handleChange}
                  />

                  <textarea
                    name="message"
                    className="hospital-form-input hospital-form-message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    rows={2}
                  />
                  <div className="hospital-form-agree-wrap mb-2 d-flex align-items-start">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      className="hospital-form-checkbox mt-1"
                    />
                    <label className="hospital-form-agree-text ms-2">
                      By submitting this form, I agree to Bejan Singh Eye
                      Hospital's Terms & Conditions and Privacy Policy. I
                      consent to receive updates and notifications via Email,
                      WhatsApp and SMS.
                    </label>
                  </div>
                  <button type="submit" className="hospital-form-submit-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="our-doctors-section py-4">
          <div className="container">
            <h2 className="our-doctors-title mb-4">Our doctors</h2>
            <div className="row mt-5 gx-4 gy-4">
              {doctors.map((doctor, idx) => (
                <div
                  key={idx}
                  className="col-lg-3 col-md-6 col-12 d-flex justify-content-center mt-5"
                >
                  <div className="Our-doctor-card text-center">
                    <div className="doctor-img-wrap mx-auto mb-3">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={88.6}
                        height={88.6}
                        className="doctor-img"
                      />
                    </div>
                    <div className="doctor-name mb-1">{doctor.name}</div>
                    <div className="doctor-role mb-1">{doctor.role}</div>
                    <div className="doctor-schedule mb-1">
                      {doctor.schedule}
                    </div>
                    <div className="doctor-desc mb-2">{doctor.desc}</div>
                    <div className="doctor-icons d-flex justify-content-center gap-2">
                      {doctor.icons.map((icon, i) => (
                        <i key={i} className={`${icon} doctor-icon`} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="dummy-space"></div>

        <section className="customer-testimonials-section py-5">
          <div className="container">
            <div className="customer-testimonials-bg rounded-5 position-relative d-flex flex-column justify-content-center align-items-center">
              <div className="row w-100 align-items-center ">
                {/* Left Title */}
                <div className="col-lg-3  d-flex align-items-center">
                  <span className="customer-testimonials-title  w-25">
                    Customer testimonials
                  </span>
                </div>

                {/* Right Boxes */}
                <div className="col-lg-8  d-flex justify-content-center align-items-center">
                  {testimonials.map((testi, idx) => (
                    <div
                      key={idx}
                      className="customer-testimonial-box bg-white rounded-1 p-3 shadow-sm"
                    >
                      <div className="customer-testimonial-text mb-2">
                        {testi.text}
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-2">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            src={testi.profile}
                            alt={testi.name}
                            width={28}
                            height={28}
                            className="customer-testimonial-profile"
                            style={{
                              borderRadius: "50%",
                              width: "28px",
                              height: "28px",
                              objectFit: "cover",
                            }}
                          />
                          <span className="customer-testimonial-name">
                            {testi.name}
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <span className="customer-testimonial-rating">
                            {testi.rating}
                          </span>
                          <i className="bi bi-star-fill customer-testimonial-star" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Customer images row at bottom */}
              <div className="customer-images-row d-flex justify-content-center align-items-center gap-3 mt-4 w-100">
                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={40}
                  height={40}
                  className="testimonial-profile1"
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                  }}
                ></img>

                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={70}
                  height={70}
                  className="testimonial-profile2"
                  style={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                ></img>

                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={70}
                  height={70}
                  className="testimonial-profile3"
                  style={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                ></img>

                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={50}
                  height={50}
                  className="testimonial-profile4"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                ></img>

                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={40}
                  height={40}
                  className="testimonial-profile5"
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                  }}
                ></img>

                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={70}
                  height={70}
                  className="testimonial-profile6"
                  style={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                ></img>

                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={50}
                  height={50}
                  className="testimonial-profile7"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                ></img>

                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={70}
                  height={70}
                  className="testimonial-profile8"
                  style={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                ></img>

                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={70}
                  height={70}
                  className="testimonial-profile9"
                  style={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                ></img>

                <img
                  src="./assets/Images/Customer_tes_profile.jpg"
                  alt="asdas"
                  width={50}
                  height={50}
                  className="testimonial-profile10"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
