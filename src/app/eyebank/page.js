"use client";
import { useRef } from "react";

export default function eyebank() {
  const formRef = useRef();
  return (
    <section className="contact-content-section ">
      <section className="contact-header ">
        <div className="container mt-3">
          <h1 className="contact-title-custom text-end mb-1">
            <span className="contact-heading-green">Eye</span>{" "}
            <span className="contact-heading-white">Bank</span>
          </h1>
        </div>
      </section>
      <div className="container container_ py-5 ">
        <div className="contact-page-breadcrumb ms-1 ms-md-3">
          <span>• Eye Bank</span>
        </div>

        <section className="Brighten-section my-5">
          <div className="Brighten-bg">
            <div className="Brighten-overlay m-4">
              <div className="Brighten-content mx-auto">
                <h2 className="Brighten-title">
                  Brighten: Bringing Expert Eye Care to Remote Areas
                </h2>
                <p className="Brighten-desc mb-0">
                  Eye donation is a selfless act that continues to shine even
                  after death. By pledging your eyes, you help someone see life
                  in color again. It's not just a donation, It’s a vision that
                  lives beyond you.Join us at Bejan Singh Eye Hospital in the
                  mission to fight blindness , pledge your eyes and become
                  someone’s hope. To enhance diagnosis and treatment in remote
                  locations, all our Vision Centers and two Mobile Eye Units are
                  connected to the base hospital using Brighten technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="donate-eyes-section ">
          <h2 className="donate-eyes-title">Donating Your Eyes</h2>
          <h3 className="donate-eyes-subtitle">What You Need to Know?</h3>
          <p className="donate-eyes-desc">
            Eyes can be donated only after a person’s natural death within 6–8
            hours to ensure transplant viability. The procedure is carried out
            by trained medical professionals without causing any disfigurement
            to the face or affecting funeral arrangements. The entire procedure
            is completed in 20 to 30 minutes and the team handles the process
            with care, respect, and dignity.
          </p>
        </section>

        <section className="international-form-section py-2 py-md-5">
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

        <section className="donate-eyes-section-down mb-3">
          <h2 className="donate-eyes-title-down">
            Donating Your Eyes: What You Need to Know
          </h2>
          <p className="donate-eyes-desc mt-4">
            Eyes can be donated only after a person’s natural death within 6–8
            hours to ensure transplant viability.The procedure is carried out by
            trained medical professionals without causing any disfigurement to
            the face or affecting funeral arrangements.The entire procedure is
            completed in 20 to 30 minutes and the team handles the process with
            care, respect, and dignity
          </p>
        </section>
      </div>
    </section>
  );
}
