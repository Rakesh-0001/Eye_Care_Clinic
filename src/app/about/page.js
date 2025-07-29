"use client";
import React, { useState } from "react";

const years = [
  {
    year: 2021,
    content:
      "Bejan Singh Eye Hospital stands as a center of excellence in ophthalmic care, offering advanced diagnostic and treatment services across all eye care specialties. Our dedicated team of expert doctors and staff ensure that every patient receives attentive, personalized care in a safe and well-equipped environment.\n\nWith a reputation built on trust, precision, and compassion, we are committed to delivering reliable, high-quality eye care that meets international standards. Whether it’s routine eye exams or complex surgical procedures, patients choose us for our expertise, integrity, and unwavering focus on protecting and enhancing vision.",
  },
  {
    year: 2022,
    content:
      "In 2022, the hospital launched its Advanced LASIK Surgery Suite and expanded its pediatric ophthalmology services, increasing access to specialized care for children.",
  },
  {
    year: 2023,
    content:
      "2023 marked the introduction of AI-powered diagnostic tools and the opening of two new outreach centers, serving rural communities across the region.",
  },
  {
    year: 2024,
    content:
      "This year, Bejan Singh Eye Hospital received national recognition for clinical excellence and patient care, and introduced green surgical practices for sustainability.",
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 0 = none, 1 = left open, 2 = right open
  const [openCard, setOpenCard] = useState(2); // right card open by default

  return (
    <section className="contact-content-section ">
      <section className="contact-header ">
        <div className="container mt-3">
          <h1 className="contact-title-custom text-end mb-1">
            <span className="contact-heading-green">About </span>{" "}
            <span className="contact-heading-white">us</span>
          </h1>
        </div>
      </section>
      <div className="container container_ py-5 ">
        <div className="contact-page-breadcrumb ms-1 ms-md-0">
          <span>• About us</span>
        </div>

        <section className="tertiary-eye-care-section">
          <div className="eye-care-block left-align">
            <h2 className="eye-care-title">
              Trusted Tertiary Eye Care in South Tamil Nadu
            </h2>
            <p className="eye-care-desc bold-desc">
              Bejan Singh Eye Hospital (P) Ltd, established in 1992, is a
              tertiary eye care center and a recognized leader in comprehensive
              ophthalmology. With over 33 years of excellence, we have remained
              committed to delivering high-quality eye care services through
              innovation, expertise, and compassion.Each year, more than
              3,50,000 patients choose our expert eye care team for specialized
              and reliable treatment.
            </p>
            <p className="eye-care-desc">
              As a trusted name in vision care, we are equipped with
              state-of-the-art facilities and advanced technologies to provide
              world-class treatment for all types of eye conditions.
            </p>
          </div>
          <div className="eye-care-block right-align">
            <h2 className="eye-care-title text-right">
              Center of Excellence in Ophthalmology
            </h2>
            <p className="eye-care-desc text-right">
              We take pride in being at the forefront of modern ophthalmology.
              Our hospital is home to super-specialty departments covering
              Retina, Glaucoma, Cataract, LASIK, Pediatric Ophthalmology,
              Cornea, Oculoplasty, and more. Whether it’s diagnosis or surgery,
              we ensure the highest level of expertise and personalized care.
            </p>
          </div>
        </section>

        <section className="founder-section">
          <div className="founder-circle-text-container">
            <div>
              <h2 className="founder-title">Founder</h2>
            </div>

            <img
              src="/assets/Images/Bejan-Signh-circle.png"
              alt="Bejan Singh"
              className="founder-circle-img"
            />
          </div>
        </section>

        <section className="founder-profiles-section ">
          {/* Dr. Bejan Singh Card */}
          <div className="founder-profile-card-first ">
            <div className="founder-profile-first">
              <img
                className="founder-profile-img-first"
                src="/assets/Images/19d499fa1df89f3a572901ceecffaeb87b6dce3d.jpg"
                alt="Dr. Bejan Singh"
              />
              <div className="founder-profile-name-bg-first">
                <span className="founder-profile-name">Dr. Bejan Singh</span>
              </div>
            </div>
            <div className="founder-profile-right">
              <div className="founder-profile-desc">
                <span className="desc-bold">
                  Completed his <b>Master’s in Ophthalmology.</b> Received the{" "}
                  <b>Rtn Dr. P.N. Srinivasa Rao Award</b> for Best Outgoing
                  Student. Began his career as a{" "}
                  <b>Lecturer in Ophthalmology at Kasturba Medical College.</b>{" "}
                  Also served as{" "}
                  <b>
                    Assistant Surgeon at the OEU Institute of Ophthalmology,
                    Manipal, for one year.
                  </b>{" "}
                  Returned to his native place and{" "}
                  <b>joined Neyyoor C.S.I. Mission Hospital in 1983.</b> In
                  1985, became{" "}
                  <b>
                    Project Director and Chief Ophthalmologist of Neyyoor Eye
                    Services.
                  </b>{" "}
                  Neyyoor Eye Services is a comprehensive eye care system under
                  the Kanyakumari Medical Mission, in collaboration with
                  Christofel Blinden Mission, West Germany.
                </span>
                <div className="founder-profile-list">
                  <span className="desc-bold">
                    Played a key role in expanding eye care services to:
                  </span>
                  <ul>
                    <li>
                      <span className="desc-bold">Kulasekharam</span>
                    </li>
                    <li>
                      <span className="desc-bold">Marthandam</span>
                    </li>
                    <li>
                      <span className="desc-bold">Karakkonam</span>
                    </li>
                  </ul>
                </div>
                <span className="desc-normal">
                  In 1987, underwent super-specialized training in Cataract
                  Surgery with Lens Implant at Upson Eye Clinic, USA.
                </span>
              </div>
            </div>
          </div>

          {/* Dr. Rooshitha B. Singh Card */}
          <div className="founder-profile-card-second">
            <div className="founder-profile-second">
              <img
                className="founder-profile-img-second"
                src="/assets/Images/19d499fa1df89f3a572901ceecffaeb87b6dce3d.jpg"
                alt="Dr. Rooshitha B. Singh"
              />
              <div className="founder-profile-name-bg-second">
                <span className="founder-profile-name">Dr. Bejan Singh</span>
              </div>
            </div>
            <div className="founder-profile-right right-text">
              <div className="founder-profile-desc">
                <div className="Dr-name mb-4"> Dr. Rooshitha B. Singh </div>

                <span className="desc-normal">
                  Earned her MBBS degree from Stanley Medical College, Chennai.
                  <br />
                  <br />
                  Completed her D.O. (Diploma in Ophthalmology) from Madurai
                  Medical College.
                  <br />
                  <br />
                  Holds a Hospital Management degree from Manonmaniam Sundaranar
                  University.
                  <br />
                  <br />
                  After her postgraduation in Ophthalmology, she joined her
                  husband Dr. Bejan Singh at Neyyoor, working with Kanyakumari
                  Medical Mission as a Junior Ophthalmologist.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="journey-timeline-section">
        <div className="journey-bg">
          <div className="journey-overlay" />
          <div className="journey-content-row ">
            <div className="timeline-col">
              <div className="timeline-vertical ">
                <div className="timeline-line  " />
                {years.map((item, idx) => (
                  <div
                    key={item.year}
                    className="timeline-node-container "
                    style={{
                      top: `calc(${(idx / (years.length - 1)) * 80}% - 1px)`,
                    }}
                    onClick={() => setActiveIndex(idx)}
                    tabIndex={0}
                  >
                    <div
                      className={`timeline-node${
                        idx === activeIndex ? " active" : ""
                      }`}
                    >
                      <div
                        className={
                          idx === activeIndex ? "circle-green" : "circle-white"
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="timeline-arrows">
                <button
                  className="timeline-arrow mb-1"
                  disabled={activeIndex === 0}
                  onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                  aria-label="Previous year"
                >
                  <i class="bi bi-arrow-up year-arrow"></i>
                </button>
                <button
                  className="timeline-arrow"
                  disabled={activeIndex === years.length - 1}
                  onClick={() =>
                    setActiveIndex((i) => Math.min(years.length - 1, i + 1))
                  }
                  aria-label="Next year"
                >
                  <i class="bi bi-arrow-down year-arrow"></i>
                </button>
              </div>
            </div>

            <div className="year-container">
              {years.map((item, idx) => (
                <div
                  key={item.year}
                  className="years-container"
                  onClick={() => setActiveIndex(idx)}
                  tabIndex={0}
                >
                  <div
                    className={
                      "timeline-year" +
                      (idx === activeIndex ? " timeline-year-active" : "")
                    }
                  >
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
            <div className="journey-main-content">
              <div>
                <div className="journey-heading text-end mt-3">Our Journey</div>
                <div className="journey-desc">
                  {years[activeIndex].content.split("\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="apart-cards-container">
          <div className="apart-cards-section ">
            {/* Left Card */}
            <div className={`doctor-card${openCard === 1 ? " active" : ""}`}>
              <img
                src="/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg"
                alt="Doctor"
                className="doctor-image"
              />
              <div className="doctor-glass-bar"></div>
              <div
                className={`doctor-content-glass${
                  openCard === 1 ? " show" : ""
                }`}
              >
                <div className="doctor-title">Dr. Rooshitha B. Singh</div>
                <div className="doctor-content">
                  Earned her MBBS degree from Stanley Medical College, Chennai.
                  <br />
                  <br />
                  Completed her D.O. (Diploma in Ophthalmology) from Madurai
                  Medical College.
                  <br />
                  <br />
                  Holds a Hospital Management degree from Manonmaniam Sundaranar
                  University.
                  <br />
                  <br />
                  After her postgraduation in Ophthalmology, she joined her
                  husband Dr. Bejan Singh at Neyyoor, working with Kanyakumari
                  Medical Mission as a Junior Ophthalmologist.
                </div>
                <button
                  className="doctor-arrow-btn doctor-arrow-btn-close"
                  onClick={() => setOpenCard(0)}
                  aria-label="Hide details"
                >
                  <i
                    className={`bi bi-arrow-up-right doctor-arrow-up-right `}
                  />
                </button>
              </div>
              {openCard !== 1 && (
                <button
                  className="doctor-arrow-btn doctor-arrow-btn-open"
                  onClick={() => setOpenCard(1)}
                  aria-label="Show details"
                >
                  <i className={`bi bi-arrow-up-right doctor-arrow-up-right`} />
                </button>
              )}
            </div>
            {/* Right Card */}
            <div
              className={`doctor-card second-card${
                openCard === 2 ? " active" : ""
              }`}
            >
              <img
                src="/assets/Images/0c089397dc8e7cfd586fa7254949321d95a33b29.jpg"
                alt="Doctor"
                className="doctor-image"
              />
              <div className="doctor-glass-bar"></div>
              <div
                className={`doctor-content-glass${
                  openCard === 2 ? " show" : ""
                }`}
              >
                <div className="doctor-title">Dr. Rooshitha B. Singh</div>
                <div className="doctor-content">
                  Earned her MBBS degree from Stanley Medical College, Chennai.
                  <br />
                  <br />
                  Completed her D.O. (Diploma in Ophthalmology) from Madurai
                  Medical College.
                  <br />
                  <br />
                  Holds a Hospital Management degree from Manonmaniam Sundaranar
                  University.
                  <br />
                  <br />
                  After her postgraduation in Ophthalmology, she joined her
                  husband Dr. Bejan Singh at Neyyoor, working with Kanyakumari
                  Medical Mission as a Junior Ophthalmologist.
                </div>
                <button
                  className="doctor-arrow-btn doctor-arrow-btn-close"
                  onClick={() => setOpenCard(0)}
                  aria-label="Hide details"
                >
                  <i className={`bi bi-arrow-up-right doctor-arrow-up-right`} />
                </button>
              </div>
              {openCard !== 2 && (
                <button
                  className="doctor-arrow-btn doctor-arrow-btn-open"
                  onClick={() => setOpenCard(2)}
                  aria-label="Show details"
                >
                  <i className={`bi bi-arrow-up-right doctor-arrow-up-right`} />
                </button>
              )}
            </div>
          </div>
        </div>
        <section className="apart-main-section">
          <div className="apart-title">What Sets Us Apart</div>

          <div className="row g-4 ">
            {/* Left: Image Card */}
            <div className="col-lg-6 col-md-12 mb-3">
              <div className="apart-img-card">
                <div className="apart-img-main" />
                {/* Bottom right overlay */}
                <div className="apart-img-overlay">
                  <div className="apart-img-docname">
                    Dr. Rooshitha B. Singh
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Features */}
            <div className="col-lg-6 col-md-12">
              <div className="apart-features-col">
                <div className="apart-feature">
                  <div className="apart-feature-title">Established Brand</div>
                  <div className="apart-feature-desc">
                    With over three decades of experience, Bejan Singh Eye
                    Hospital has become a well-recognized and respected name in
                    the field of ophthalmology.
                  </div>
                </div>
                <div className="apart-feature">
                  <div className="apart-feature-title">Expert Medical Team</div>
                  <div className="apart-feature-desc">
                    Our hospital is staffed with a highly qualified team of
                    ophthalmologists, optometrists, nurses, and technicians
                    dedicated to providing personalized and effective
                    treatments.
                  </div>
                </div>
                <div className="apart-feature">
                  <div className="apart-feature-title">
                    Integrated Eye Care Model
                  </div>
                  <div className="apart-feature-desc">
                    We operate a seamless care ecosystem that includes:
                    <ul className="apart-feature-list">
                      <li>Tertiary hospital</li>
                      <li>Vision centers</li>
                      <li>Opticals</li>
                      <li>Academic and research institutions</li>
                    </ul>
                    This integrated approach ensures continuity of care from
                    diagnosis to recovery.
                  </div>
                </div>
                <div className="apart-feature">
                  <div className="apart-feature-title">
                    Advanced Technology & Infrastructure
                  </div>
                  <div className="apart-feature-desc">
                    We are equipped with state-of-the-art diagnostic and
                    surgical equipment, some of which are exclusive to our
                    facility in this region. Patients receive complete treatment
                    in one location, eliminating the need for referrals or
                    additional travel.
                  </div>
                </div>
                <div className="apart-feature">
                  <div className="apart-feature-title">
                    Innovation and Community Outreach
                  </div>
                  <div className="apart-feature-desc">
                    We are deeply committed to social responsibility and digital
                    transformation:
                    <br />
                    <ul className="apart-feature-list">
                      <li>
                        Over 500+ free eye camps and school screenings conducted
                      </li>
                      <li>Mobile eye care units for underserved communities</li>
                      <li>
                        Partnerships with government and NGOs for rural outreach
                      </li>
                    </ul>
                    Adoption of digital health technologies to expand our
                    impact.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
