import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const genderOptions = ["Male", "Female", "Other"];
const specializationOptions = ["Cataract", "Retina", "General", "LASIK"];
const doctorOptions = [
  "Dr. Rajan Singh",
  "Dr. Sarah Wilson",
  "Dr. Michael Chen",
];

export default function BookAppointment() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    gender: "",
    specialization: "",
    date: "",
    doctor: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      className={`appointment-section px-2 px-md-5 ${showForm ? "mb-3" : ""}`}
    >
      <div className="container">
        <h1 className="appointment-title text-center text-md-start mt-3">Book appointment</h1>
        <form
          className={`appointment-form ${showForm ? "show-all" : "show-email"}`}
          onSubmit={(e) => {
            e.preventDefault();
            setShowForm(true);
          }}
        >
          {/* Email field always visible */}
          <div className="row mb-3">
            <div className="col-12 d-flex align-items-center email-flex-row">
              <input
                type="email"
                name="email"
                className="appointment-input form-control bg-transparent text-white border-0 border-bottom me-2"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                style={showForm ? { width: "100%" } : { width: "85%" }}
                disabled={showForm}
              />
              {!showForm && (
                <button
                  type="submit"
                  className="appointment-btn email-btn ms-2"
                >
                  Enter email
                </button>
              )}
            </div>
          </div>
          {/* Other fields appear after email submit */}
          {showForm && (
            <div className="animated-fields">
              <div className="row  animated-row mb-3">
                <div className="col-md-4 mb-3 mb-md-0">
                  <input
                    type="text"
                    name="name"
                    className="appointment-input form-control bg-transparent text-white border-0 border-bottom"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <input
                    type="tel"
                    name="phone"
                    className="appointment-input form-control bg-transparent text-white border-0 border-bottom"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                  />
                </div>
                <div className="col-md-4">
                  <div className="position-relative">
                    <select
                      name="gender"
                      className="appointment-input appointment-select form-control bg-transparent text-white border-0 border-bottom pe-5"
                      value={form.gender}
                      onChange={handleChange}
                      style={{
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      <option value="" hidden>
                        Gender
                      </option>
                      {genderOptions.map((g) => (
                        <option key={g} className="option-bg" value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <i
                      className="bi bi-chevron-down"
                      style={{
                        position: "absolute",
                        right: "1px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        color: "#fff",
                        fontSize: "18px",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="row  animated-row mb-3">
                <div className="col-md-4">
                  <div className="position-relative">
                    <select
                      name="specialization"
                      className="appointment-input appointment-select form-control bg-transparent text-white border-0 border-bottom pe-5"
                      value={form.specialization}
                      onChange={handleChange}
                      style={{
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      <option value="" hidden>
                        Specialization Options
                      </option>
                      {specializationOptions.map((g) => (
                        <option key={g} className="option-bg" value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <i
                      className="bi bi-chevron-down"
                      style={{
                        position: "absolute",
                        right: "1px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        color: "#fff",
                        fontSize: "18px",
                      }}
                    ></i>
                  </div>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <input
                    type="date"
                    name="date"
                    className="appointment-input form-control bg-transparent text-white border-0 border-bottom"
                    value={form.date}
                    onChange={handleChange}
                    placeholder="Preferred date"
                  />
                </div>
                <div className="col-md-4">
                  <div className="position-relative">
                    <select
                      name="doctor"
                      className="appointment-input appointment-select form-control bg-transparent text-white border-0 border-bottom pe-5"
                      value={form.doctor}
                      onChange={handleChange}
                      style={{
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      <option value="" hidden>
                        Doctor
                      </option>
                      {doctorOptions.map((g) => (
                        <option key={g} className="option-bg" value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <i
                      className="bi bi-chevron-down"
                      style={{
                        position: "absolute",
                        right: "1px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        color: "#fff",
                        fontSize: "18px",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="row  animated-row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input
                    type="text"
                    name="location"
                    className="appointment-input form-control bg-transparent text-white border-0 border-bottom"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Location"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="message"
                    className="appointment-input form-control bg-transparent text-white border-0 border-bottom"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="row  animated-row">
                <div className="col-12 text-end">
                  <button type="submit" className="appointment-btn submit-btn">
                    Book appointment
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
