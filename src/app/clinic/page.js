"use client";

import { useState } from "react";
import Image from "next/image";

// Example hospital data (add more objects for more cards)
const hospitals = [
  {
    name: "Nagercoil",
    image: "/assets/Images/Clinic/Nagercoil-clinic.png",
    review: "2k Happy customers",
    stars: 5,
    address: "Vettoornimadam, Nagercoil, Kanyakumari District.",
    location: "Nagercoil",
    mail: "info@nagercoil.com",
    phone: "+91-9876543210",
  },
  {
    name: "Toric IOL Implantation",
    image: "/assets/Images/Clinic/Toric-clinic.png",
    review: "1.7k Happy customers",
    stars: 4,
    address: "Vettoornimadam, Nagercoil, Kanyakumari District.",
    location: "Toric Town",
    mail: "toric@clinic.com",
    phone: "+91-9876543211",
  },
  {
    name: "OCT Imaging",
    image: "/assets/Images/Clinic/Oct-clinic.png",
    review: "1.9k Happy customers",
    stars: 5,
    address: "Vettoornimadam, Nagercoil, Kanyakumari District.",
    location: "OCT Street",
    mail: "oct@clinic.com",
    phone: "+91-9876543212",
  },
];

// Dynamic FAQ data
const faqs = [
  {
    question: "Frequently asked question?",
    answer:
      "Our doctors provide expert medical advice and consultation for all your eye care needs. Get in touch with our team to discuss. Our doctors provide expert medical advice and consultation for all your eye care needs. Get in touch with our team to discuss.",
  },
  {
    question: "Frequently asked question?",
    answer:
      "You can schedule an appointment online or by calling our clinic directly. Our team will help you find a suitable time for your visit.",
  },
  {
    question: "Frequently asked question?",
    answer:
      "We offer comprehensive eye examinations, diagnosis of eye conditions, and personalized treatment plans for every patient.",
  },
  {
    question: "Frequently asked question?",
    answer:
      "Yes, our clinics are equipped with state-of-the-art technology for accurate diagnosis and effective treatment.",
  },
];

export default function clinic() {
  // State for search
  const [searchHospital, setSearchHospital] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  const [openIdx, setOpenIdx] = useState(0);

  // Get unique hospital names and locations for dropdowns
  const hospitalNames = [...new Set(hospitals.map((h) => h.name))];
  const locations = [...new Set(hospitals.map((h) => h.location))];

  // Search handler
  const handleSearch = () => {
    let filtered = hospitals;
    if (searchHospital) {
      filtered = filtered.filter((h) =>
        h.name.toLowerCase().includes(searchHospital.toLowerCase())
      );
    }
    if (searchLocation) {
      filtered = filtered.filter((h) =>
        h.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }
    setFilteredHospitals(filtered);
  };

  return (
    <section className="blog-section ">
      <div className="container ">
        <section className="contact-header ">
          <div className="container mt-3">
            <h1 className="contact-title-custom text-end mb-1">
              <span className="contact-heading-green">Clinic</span>{" "}
            </h1>
          </div>
        </section>
        <div className="container container_ ">
          <div className="contact-page-breadcrumb ms-3">
            <span>• Clinic</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="d-flex justify-content-center align-items-center mt-3 mb-4">
          <div className="search-container d-flex align-items-center px-3 py-2">
            <div className="input-group job-search-input-wrapper d-flex align-items-center flex-grow-1 ">
              <span
                className="input-group-text border-none shadow-none"
                id="basic-addon1"
              >
                <i className="bi bi-geo-alt job-search-location-icon"></i>
              </span>
              <select
                className="form-select border-0 shadow-none"
                value={searchHospital}
                onChange={(e) => setSearchHospital(e.target.value)}
              >
                <option value="">Search hospital</option>
                {hospitalNames.map((name, idx) => (
                  <option key={idx} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group job-search-input-wrapper d-flex align-items-center flex-grow-1 ">
              <span
                className="input-group-text border-none shadow-none"
                id="basic-addon2"
              >
                <i className="bi bi-geo-alt job-search-location-icon"></i>
              </span>
              <select
                className="form-select border-0 shadow-none mx-2"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              >
                <option value="">location</option>
                {locations.map((loc, idx) => (
                  <option key={idx} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="job-search-btn d-flex justify-content-between align-items-center"
              type="button"
              onClick={handleSearch}
            >
              <i className="bi bi-search me-3"></i>
              Search
            </button>
          </div>
        </div>
        <section className="clinic-cards-section mt-5 mb-5 py-4">
          <div className="container">
            <div className="row justify-content-center">
              {filteredHospitals.map((hospital, idx) => (
                <div
                  key={idx}
                  className="col-lg-4 col-md-6 col-12 mb-4 d-flex align-items-stretch"
                >
                  <div className="clinic-card w-100">
                    <div className="clinic-card-header">{hospital.name}</div>
                    <div className="clinic-card-divider"></div>
                    <div className="clinic-card-img-area">
                      <div className="clinic-card-img-wrap">
                        <Image
                          src={hospital.image}
                          alt={hospital.name}
                          width={402}
                          height={260}
                          className="clinic-card-img"
                        />
                        <div className="clinic-card-info-bar">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <div className="d-flex align-items-center gap-1">
                              {Array.from({ length: hospital.stars }).map(
                                (_, i) => (
                                  <i
                                    key={i}
                                    className="bi bi-star-fill clinic-card-star"
                                  />
                                )
                              )}
                              <span className="clinic-card-review ms-1">
                                {hospital.review}
                              </span>
                            </div>
                            <div className="d-flex gap-2">
                              <i
                                className="bi bi-envelope clinic-card-icon"
                                title="Mail"
                              />
                              <i
                                className="bi bi-telephone clinic-card-icon"
                                title="Call"
                              />
                            </div>
                          </div>
                          <div className="clinic-card-address mb-2">
                            {hospital.address}
                          </div>
                          <div className="clinic-card-arrow text-end">
                            <i className="bi bi-arrow-up-right-circle-fill clinic-card-arrow-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="clinic_space mt-5 mb-5 py-4"></section>

        <section className="blog-faq-section py-4">
          <div className="container">
            <h2 className="blog-title mb-2">Blog</h2>
            <p className="blog-desc mb-4 mt-4">
              Our doctors provide expert{" "}
              <span className="fw-bold">medical advice</span> and consultation
              for all your eye care
              <br className="d-none d-md-block" /> needs. Get in touch with our
              team to discuss.
            </p>

            <div className="blog-faq-accordion mt-3 mb-5">
              {faqs.map((faq, idx) => (
                <div key={idx} className="blog-faq-card mb-3">
                  <div
                    className={`blog-faq-question d-flex justify-content-between align-items-center ${
                      openIdx === idx ? "" : ""
                    }`}
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                    tabIndex={0}
                    role="button"
                  >
                    <span className="blog-faq-q-text">{faq.question}</span>
                    <span className="blog-faq-arrow">
                      <i
                        className="bi bi-arrow-up-right"
                        style={{
                          display: "inline-block",
                          transform:
                            openIdx === idx ? "rotate(45deg)" : "rotate(0deg)",
                          transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                        }}
                      />
                    </span>
                  </div>
                  <div
                    className={`blog-faq-answer ${
                      openIdx === idx ? "show" : ""
                    }`}
                    style={{ display: openIdx === idx ? "block" : "none" }}
                  >
                    {faq.answer}
                  </div>
                  {/* Only show <hr> if NOT the last item */}
                  {idx !== faqs.length - 1 && (
                    <hr className="blog-faq-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
