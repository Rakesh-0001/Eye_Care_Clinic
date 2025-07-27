"use client";
import Image from "next/image";
import { useState } from "react";
import { Doctors } from "../../Datas/Doctors-Data.js";

export default function Institution() {
  const programs = [
    {
      title: "B.Optom (Bachelor of Optometry)",
      content: {
        heading: "B.Optom Lateral Entry",
        desc: [
          "The Bachelor of Optometry (B.Optom) program is a comprehensive undergraduate course designed to prepare students for essential roles in eye and vision care. Students are trained to assess visual health, diagnose refractive errors, detect ocular diseases, and work closely with ophthalmologists to deliver integrated eye care.",
          "The Lateral Entry option is available for candidates who have completed a Diploma in Optometry from a recognized institution. They join directly in the second year and study advanced topics such as specialty contact lenses, pediatric and geriatric optometry, vision therapy, low vision rehabilitation, and research methodology.",
        ],
        eligibility: [
          "Regular Entry: 10+2 with Science stream (PCB preferred), minimum age 17",
          "Lateral Entry: Diploma in Optometry from an NMC/OCI-recognized institution with qualifying marks, minimum age 17",
        ],
        duration: [
          "Regular Entry: 3 Years + 1 Year Internship",
          "Lateral Entry: 2 Years + 1 Year Internship (for Diploma holders)",
        ],
        image: "/assets/Images/Institution-Programs-Offered.jpg",
      },
    },
    {
      title: "M.Optom (Master of Optometry)",
      content: {
        heading: "M.Optom (Master of Optometry)",
        desc: [
          "The Master of Optometry (M.Optom) is a postgraduate program aimed at advanced clinical skills and research in optometry.",
          "Students gain expertise in specialty fields, research methods, and clinical practice.",
        ],
        eligibility: ["B.Optom degree from recognized university."],
        duration: ["2 Years Full Time"],
        image: "/assets/Images/Institution-Programs-Offered.jpg",
      },
    },
    {
      title: "Diploma in Ophthalmic Assistant",
      content: {
        heading: "Diploma in Ophthalmic Assistant",
        desc: [
          "A diploma program to train assistants in ophthalmic procedures, patient care, and clinical support.",
        ],
        eligibility: ["10+2 (any stream) from recognized board."],
        duration: ["2 Years"],
        image: "/assets/Images/Institution-Programs-Offered.jpg",
      },
    },
    {
      title: "DNB (Post MBBS)",
      content: {
        heading: "DNB (Post MBBS)",
        desc: [
          "Postgraduate training for MBBS graduates to become specialists in ophthalmology.",
        ],
        eligibility: ["MBBS degree with qualifying marks."],
        duration: ["3 Years"],
        image: "/assets/Images/Institution-Programs-Offered.jpg",
      },
    },
    {
      title: "DNB (Post Diploma)",
      content: {
        heading: "DNB (Post Diploma)",
        desc: [
          "Specialty training for candidates with a diploma in ophthalmology.",
        ],
        eligibility: ["Diploma in Ophthalmology."],
        duration: ["2 Years"],
        image: "/assets/Images/Institution-Programs-Offered.jpg",
      },
    },
    {
      title: "Fellowship in Glaucoma",
      content: {
        heading: "Fellowship in Glaucoma",
        desc: [
          "Advanced fellowship for in-depth knowledge and practice in glaucoma management.",
        ],
        eligibility: ["MS/MD/DNB in Ophthalmology."],
        duration: ["1 Year"],
        image: "/assets/Images/Institution-Programs-Offered.jpg",
      },
    },
    {
      title: "Fellowship in Retina",
      content: {
        heading: "Fellowship in Retina",
        desc: [
          "Fellowship for specialized training in retinal disorders and surgical techniques.",
        ],
        eligibility: ["MS/MD/DNB in Ophthalmology."],
        duration: ["1 Year"],
        image: "/assets/Images/Institution-Programs-Offered.jpg",
      },
    },
  ];

  const [selected, setSelected] = useState(0);

  const facilities = [
    "Well-Equipped Library & Learning Resources",
    "Advanced Laboratories for Practical Learning",
    "Expert Faculty & Global Methodology",
    "Technology-Driven Education",
  ];

  return (
    <div className="institution-page">
      <section className="contact-content-section">
        <div className="scrollable-content">
          <section className="contact-header">
            <div className="container mt-3">
              <h1 className="contact-title-custom text-end mb-1">
                <span className="contact-heading-green">Institution</span>
              </h1>
            </div>
          </section>
          <div className="container py-5 institution-container">
            <div className="contact-page-breadcrumb ms-3">• Institution</div>
            <div className="vision-mission-row">
              {/* Left Column */}
              <div className="left-col">
                <div className="vision-title">Our Vision & Mission</div>
                <div className="images-stack">
                  <div className="left-image-wrapper">
                    <Image
                      src="/assets/Images/Institution-left-img.jpg"
                      alt="Institution left"
                      width={505}
                      height={210}
                      className="left-image"
                    />
                    <Image
                      src="/assets/Images/Institution-circle-img.png"
                      alt="Circle text"
                      width={180}
                      height={180}
                      className="circle-image"
                    />
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="right-col">
                <div className="vision-text-top">
                  To be a globally recognized center of excellence in education,
                  research, and patient-centric care, dedicated to illuminating
                  futures through advanced knowledge and compassionate practice.
                </div>
                <div className="right-image-wrapper">
                  <Image
                    src="/assets/Images/Institution-right-img.png"
                    alt="Institution shape right"
                    width={505}
                    height={526}
                    className="right-image"
                  />
                </div>
                <div className="vision-text-bottom">
                  To provide rigorous and in-depth training programs, that equip
                  students with exceptional clinical skills, surgical
                  proficiency, and a strong foundation in ophthalmic science, in
                  adherence to the standards of The Tamil Nadu Dr. M.G.R.
                  Medical University.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bejan-section">
        <div className="container">
          <h2 className="bejan-title">
            Bejan Singh Institute of Ophthalmology
          </h2>
          <h3 className="bejan-subtitle">
            Premier Eye Education in Nagercoil, Kanyakumari
          </h3>
          <p className="bejan-desc">
            The Bejan Singh institute of ophthalmology was established in 2011
            by Dr.S.M.Bejan Singh. It is known for its excellence in eye care
            education in south TamilNadu
          </p>
          <p className="bejan-desc">
            and is proudly affiliated with{" "}
            <span className="bejan-affiliate">
              The Tamil Nadu Dr. M.G.R. Medical University, Chennai.
            </span>
            <span className="bejan-affiliate-desc">
              {" "}
              This affiliation reflects our strong commitment to delivering
              world-class ophthalmic training and research.
            </span>
          </p>
        </div>
      </section>

      <section className="programs-section mt-3">
        <div className="container programs-container">
          <div className=" mb-5">
            <h2 className="Academic-title w-50">Academic Programs Offered</h2>
          </div>
          <div className="row ">
            {/* Left: Program List */}
            <div className="col-lg-3 col-md-4 col-12 programs-list-col">
              <div className="programs-list">
                {programs.map((p, idx) => (
                  <div
                    key={p.title}
                    className={
                      "programs-list-item" + (selected === idx ? " active" : "")
                    }
                    onClick={() => setSelected(idx)}
                  >
                    <div>
                      <span>{p.title}</span>{" "}
                    </div>
                    <div>
                      <i className="bi bi-chevron-down ms-2"></i>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Program Content */}
            <div className="col-lg-9 col-md-8 col-12 programs-content-col">
              <div className="programs-content">
                <h2 className="programs-content-title">
                  {programs[selected].content.heading}
                </h2>
                {programs[selected].content.desc.map((t, i) => (
                  <p className="programs-content-desc" key={i}>
                    {t}
                  </p>
                ))}
                <div className="programs-content-subtitle">Eligibility:</div>
                <ul className="programs-content-list">
                  {programs[selected].content.eligibility.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                <div className="programs-content-subtitle">Duration:</div>
                <ul className="programs-content-list">
                  {programs[selected].content.duration.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="programs-img-wrapper">
                <Image
                  src={programs[selected].content.image}
                  alt="Program"
                  width={180}
                  height={544}
                  className="programs-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Admission-section mt-1">
        <div className="container Admission-container">
          <div className=" mb-5">
            <h2 className="Academic-title w-50">
              Admission & Selection Process
            </h2>
          </div>
        </div>
        <div
          className="admission-process-bg"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,11,65,0.66) 70%, rgba(0,11,65,0.66)), url('/assets/Images/Institution-application-background.png')",
          }}
        >
          <div className="container admission-process-content">
            <div className="admission-process-left">
              <div className="admission-process-block">
                <div className="admission-process-label">Application:</div>
                <div className="admission-process-desc">
                  Our application process is very simple. Download the
                  application form, fill the same and submit the form by{" "}
                  <span className="admission-process-bold">
                    WhatsApp to +91 9524917531
                  </span>{" "}
                  ,<br />
                  <span className="admission-process-bold">
                    Email to info@bejansinghio.com
                  </span>{" "}
                  or you can visit our college along with
                </div>
              </div>
              <div className="admission-process-block mt-3">
                <div className="admission-process-label">
                  Selection Process:
                </div>
                <div className="admission-process-desc">
                  The application is reviewed by our selection committee and
                  admission is based on merit. Shortlisted candidates are called
                  for an interview.
                </div>
              </div>
              <div className="admission-process-btn">
                <div>
                  <a
                    href="/assets/docs/ApplicationForm.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    Application form{" "}
                  </a>
                </div>
                <div className="download-icon-wrapper">
                  <i className="bi bi-download download-icon"></i>
                </div>
              </div>
            </div>
            <div className="admission-process-divider d-none d-lg-block"></div>
            <div className="admission-metrics-outer">
              <div className="admission-metrics-inner">
                <div className="admission-metrics-row">
                  <div className="admission-metrics-item">
                    <div className="admission-metrics-value">167+</div>
                    <div className="admission-metrics-label">Doctors</div>
                  </div>
                  <div className="admission-metrics-vert-divider" />
                  <div className="admission-metrics-item">
                    <div className="admission-metrics-value">7000+</div>
                    <div className="admission-metrics-label">Patients</div>
                  </div>
                </div>
                <div className="admission-metrics-row">
                  <div className="admission-metrics-item">
                    <div className="admission-metrics-value">100+</div>
                    <div className="admission-metrics-label ms-4">
                      Cataract Suites
                    </div>
                  </div>
                  <div className="admission-metrics-vert-divider" />
                  <div className="admission-metrics-item">
                    <div className="admission-metrics-value">200+</div>
                    <div className="admission-metrics-label">Retina</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="academic-facilities-section">
        <div className="container academic-facilities-container">
          <div className="row w-100">
            <div className="col-lg-2 col-md-12 academic-facilities-title-col">
              <div className="academic-facilities-title">
                Academic Facilities
              </div>
            </div>
            <div className="col-lg-10 col-md-12">
              <div className="row academic-facilities-list ms-5">
                {facilities.map((item, idx) => (
                  <div
                    className="col-lg-3 col-md-4 col-6 facility-item-col"
                    key={idx}
                  >
                    <div className="facility-item">
                      <div className="facility-number">{idx + 1}</div>
                      <div className="facility-content">{item}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Admission-section ">
        <div className="container ">
          <div className=" mb-5">
            <h2 className="Academic-title w-25">College Faculty</h2>
          </div>
        </div>

        <section className="doctors-grid-section">
          <div className="container ">
            <div className="row doctors-grid-row gap-4 ">
              {Doctors.map((doctor) => (
                <div
                  className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"
                  key={doctor.id}
                >
                  <div className="Faculty_doctor-card">
                    <div className="Faculty_doctor-img-wrap">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={200}
                        height={246}
                        className="Faculty_doctor-img"
                      />
                    </div>
                    <div className="doctor-info-box">
                      <div className="doctor-name-qual">
                        <span className="Faculty_doctor-name">
                          {doctor.name}
                        </span>{" "}
                        <span className="Faculty_doctor-qual">
                          {doctor.qualification}
                        </span>
                      </div>
                      <div className="Faculty_doctor-designation">
                        {doctor.designation}
                      </div>
                      <div className="Faculty_doctor-details">
                        {doctor.details}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section className="container faculty-intro-section">
        <div className="faculty-intro-content">
          At Bejan Singh Eye Institution, the cornerstone of our academic
          excellence lies in our distinguished faculty. Each member of our
          teaching team is a seasoned expert in their field, bringing years of
          clinical experience, advanced degrees, and specialized training in
          various subspecialties of ophthalmology. Many of our faculty are
          fellowship-trained and have been actively involved in research,
          publications, and international conferences, ensuring students learn
          from professionals at the forefront of modern eye care.
          <br />
          <br />
          What truly sets our faculty apart is their unwavering commitment to
          student success. With personalized guidance and a collaborative
          learning environment, our educators ensure that learning extends
          beyond the classroom—into real-world clinics, operating rooms, and
          research labs. This hands-on approach empowers students to develop
          both clinical expertise and the confidence needed to excel in their
          professional journey.
        </div>
      </section>
    </div>
  );
}
