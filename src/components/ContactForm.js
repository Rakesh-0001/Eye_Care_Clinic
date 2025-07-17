"use client";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    formRef.current.reset();
  };

  return (
    <section className="contact-map-form-section py-5">
      <div className="row  align-items-end justify-content-center">
        {/* LEFT: Map & Text */}
        <div className="col-lg-6 d-flex flex-column h-100">
          <div className="contact-map-desc mb-3 ms-2">
            Our team is here to assist you with
            <br />
            appointments, service inquiries, and any
            <br />
            eye care concerns you may have.
          </div>
          <div className="contact-map-outer flex-grow-1 d-flex">
            <iframe
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2236064075553!2d77.41669247587672!3d8.182468391841125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1a6b0c4a7c7%3A0x4f0be0e7b5f6c847!2sIzth%20Tech%20Creative%20Solution!5e0!3m2!1sen!2sin!4v1719935510251!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0, minHeight: 220, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* RIGHT: Form */}
        <div className="col-lg-6 d-flex align-items-end justify-content-end h-100">
          <div className="contact-form-card-v2 w-100">
            <div className="form-title">Get in touch</div>
            <div className="form-subtitle mb-4">
              Our doctors provide expert <b>medical advice</b> and consultation
              for all your eye care needs.
              <br />
              Get in touch with our team to <b>discuss</b>.
            </div>
            <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile number</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <select className="form-select" required>
                  <option value="">Select location</option>
                  <option>Nagercoil</option>
                  <option>Marthandam</option>
                  <option>Valliyur</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows={2} required />
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="discuss"
                  required
                />
                <label className="form-check-label" htmlFor="discuss">
                  Our doctors provide expert <b>medical advice</b> and
                  consultation for all your eye care needs. Get in touch with
                  our team to <b>discuss</b>.
                </label>
              </div>
              <button type="submit" className="btn contact-send-btn text-white w-100 py-2" style={{backgroundColor:'#53BE90'}}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
