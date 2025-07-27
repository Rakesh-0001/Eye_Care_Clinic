import { useRef } from "react";

export default function ContactSection() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    formRef.current.reset();
  };

  return (
    <section className="py-5 bg-white">
      <div className="">
        <div className="row align-items-start justify-content-between gap-5 gy-5">
          {/* LEFT: Heading + Map */}
          <div className="col-lg-7">
            <h1 className="contact-heading mb-3 w-100 w-md-75   p-md-0 "> 
              Need Help or
             
              Directions?
            </h1>
            <div className="contact-subdesc mb-4 mt-4">
              Use the map below to find us easily, or <br></br> send us your
              query using the contact <br></br> form.
            </div>
            <div className="rounded-4 shadow overflow-hidden p-3 p-md-0">
              <iframe
                className="w-100 map-iframe"
                height="345px"
                style={{ border: 0, minHeight: 220 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2236064075553!2d77.41669247587672!3d8.182468391841125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1a6b0c4a7c7%3A0x4f0be0e7b5f6c847!2sIzth%20Tech%20Creative%20Solution!5e0!3m2!1sen!2sin!4v1719935510251!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* RIGHT: Form Card */}
          <div className="col-lg-4  d-flex justify-content-lg-end">
            <div className="contact-form-card  bg-white shadow rounded-4 p-4 w-100">
              <div className="contact-form-title mb-1 text-start">
                Prefer to Message Us?
              </div>
              <div className="contact-form-subtitle mt-2 mb-4 text-start">
                Fill out the form, and our team will get back to you as soon as
                possible.
              </div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                autoComplete="off"
                className="flex-grow-1 d-flex flex-column"
              >
                <div className="mb-0">
                  <label className="form-label">Full name</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    required
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    required
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Mobile number</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    required
                  />
                </div>
                <div className="mb-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <label className="form-label">Location</label>
                    <span>
                      {" "}
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </div>
                  <select className="form-select custom-input" required>
                    <option value=""></option>
                    <option>Nagercoil</option>
                    <option>Marthandam</option>
                    <option>Valliyur</option>
                  </select>
                </div>
                <div className="mb-0">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control custom-input"
                    rows={2}
                    required
                  />
                </div>
                <div className="form-check mb-0 d-flex align-items-start">
                  <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    id="discuss"
                    required
                  />
                  <label
                    className="form-check-label ms-2 contact-form-check-label"
                    htmlFor="discuss"
                  >
                    Our doctors provide expert <b>medical advice</b> and
                    consultation for all your eye care needs. Get in touch with
                    our team to discuss.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn w-100 contact-send-btn mt-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
