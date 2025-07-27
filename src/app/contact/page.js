"use client";
import BookAppointment from "../../components/BookAppointment";
import ContactForm from "../../components/ContactForm";
import { useRef } from "react";
import { useState } from "react";

// DYNAMIC HOSPITALS DATA
const hospitals = [
  {
    name: "Main Hospital – Vettoornimadam, Nagercoil",
    address: "2, 313C, MS Road, Vetturnimadam, Nagercoil, Tamil Nadu 629003",
    email: "Info@bseh.org",
    opening: "Open 24 hours, every day",
    phone: "04652 237 491",
    map: "https://maps.google.com/?q=8.1824,77.4107",
  },
  {
    name: "Branch Hospital 1 – Marthandam, Nagercoil",
    address: "864G+4MW, Pammam, Marthandam, Tamil Nadu 629165",
    opening: "Open 24 hours, every day",
    phone: "04652 237 491",
    map: "https://maps.google.com/?q=8.3131,77.2176",
  },
  {
    name: "Branch Hospital 2 – Vallioor, Tirunelveli",
    address:
      "27, Main Road, Opposite TMB Bank, Vadakku Valliyur, Valliyur, Tamil Nadu 627117",
    opening: (
      <>
        Monday to Saturday – 9:00 AM to 8:00 PM <br />
        Sunday – 10:00 AM to 1:00 PM
      </>
    ),
    phone: "04637 220 212",
    map: "https://maps.google.com/?q=8.3850,77.6161",
  },
];

// DATA
const LOCATIONS = [
  {
    group: "Hospitals",
    items: [
      {
        label: "Nagercoil",
        detail: {
          name: "Main Hospital – Vettoornimadam, Nagercoil",
          address:
            "2, 313C, MS Road, Vetturnimadam, Nagercoil, Tamil Nadu 629003",
          email: "Info@bseh.org",
          opening: "Open 24 hours, every day",
          phone: "04652 237 491",
          map: "https://maps.google.com/?q=8.1824,77.4107",
        },
      },
      {
        label: "Thirunelveli",
        detail: {
          name: "Branch Hospital – Thirunelveli",
          address: "123, New Street, Thirunelveli, Tamil Nadu 627001",
          email: "tlv@bseh.org",
          opening: "9:00 AM to 7:00 PM, all days",
          phone: "04632 555 999",
          map: "https://maps.google.com/?q=8.7139,77.7567",
        },
      },
      {
        label: "Valliyur",
        detail: {
          name: "Branch Hospital – Valliyur",
          address:
            "27, Main Road, Opposite TMB Bank, Vadakku Valliyur, Valliyur, Tamil Nadu 627117",
          email: "valliyur@bseh.org",
          opening: (
            <>
              Monday to Saturday – 9:00 AM to 8:00 PM <br />
              Sunday – 10:00 AM to 1:00 PM
            </>
          ),
          phone: "04637 220 212",
          map: "https://maps.google.com/?q=8.3850,77.6161",
        },
      },
    ],
  },
  {
    group: "Clinics",
    items: [
      {
        label: "Nagercoil Clinic",
        detail: {
          name: "City Clinic – Nagercoil",
          address: "45, Clinic Road, Nagercoil, Tamil Nadu 629002",
          email: "clinic@bseh.org",
          opening: "10:00 AM to 5:00 PM, Mon–Sat",
          phone: "04652 334 455",
          map: "https://maps.google.com/?q=8.1780,77.4320",
        },
      },
      {
        label: "Marthandam Clinic",
        detail: {
          name: "Marthandam City Clinic",
          address: "88, Health Ave, Marthandam, Tamil Nadu 629165",
          email: "marthandam@bseh.org",
          opening: "10:00 AM to 6:00 PM, Mon–Sat",
          phone: "04651 445 566",
          map: "https://maps.google.com/?q=8.3100,77.2200",
        },
      },
    ],
  },
  {
    group: "Opticles",
    items: [
      {
        label: "Nagercoil Optic",
        detail: {
          name: "Optic Store – Nagercoil",
          address: "Optic Plaza, Market Street, Nagercoil, Tamil Nadu 629003",
          email: "optic@bseh.org",
          opening: "9:30 AM to 8:00 PM, all days",
          phone: "04652 998 877",
          map: "https://maps.google.com/?q=8.1800,77.4200",
        },
      },
      {
        label: "Valliyur Optic",
        detail: {
          name: "Optic Store – Valliyur",
          address: "Main Bazaar, Valliyur, Tamil Nadu 627117",
          email: "valliyuroptic@bseh.org",
          opening: "10:00 AM to 7:00 PM, all days",
          phone: "04637 123 789",
          map: "https://maps.google.com/?q=8.3860,77.6150",
        },
      },
    ],
  },
];

export default function Contact() {
  const formRef = useRef();

  // ⬇️ MOVE THESE INSIDE THE COMPONENT
  const [openGroup, setOpenGroup] = useState("Hospitals");
  const [selectedItem, setSelectedItem] = useState(LOCATIONS[0].items[0].label);

  // Find currently selected detail
  const currentDetail =
    LOCATIONS.find((g) => g.group === openGroup)?.items.find(
      (i) => i.label === selectedItem
    )?.detail || null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    formRef.current.reset();
  };

  return (
    <section className="contact-content-section ">
      <section className="contact-header ">
        <div className="container mt-3">
          <h1 className="contact-title-custom text-end mb-1">
            <span className="contact-heading-green">Contact</span>{" "}
            <span className="contact-heading-white">us</span>
          </h1>
        </div>
      </section>
      <div className="container container_ py-5 ">
        <div className="contact-page-breadcrumb ms-1 ms-md-3">
          <span>• Contact us</span>
        </div>

        <div className="row g-2 g-md-4 align-items-start mt-2">
          {/* LEFT */}
          <div className="col-lg-4">
            <div className="contact-panel-left p-0 p-md-2 h-100">
              <div className="mb-4">
                <h2 className="contact-big-title mb-4">
                  Reach Out for Expert Eye Care
                </h2>
                <p className="contact-side-desc mb-4">
                  Our team is here to assist you with appointments, service
                  inquiries, and any eye care concerns you may have.
                </p>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="col-lg-8">
            <div className="contact-info-card mb-4 p-1 p-md-4 rounded-4">
              {hospitals.map((h, i) => (
                <div key={h.name}>
                  <div className="row g-3">
                    <div className="col-8">
                      <div className="contact-hospital-title">{h.name}</div>
                      <div className="contact-hospital-address mt-3">
                        {h.address}
                      </div>
                      {h.email && (
                        <div className="contact-hospital-label">
                          email:{" "}
                          <span className="contact-hospital-email">
                            {h.email}
                          </span>
                        </div>
                      )}
                      <div className="contact-hospital-label">
                        <span>Opening Hours:</span>{" "}
                        <span className="contact-hospital-hours">
                          {h.opening}
                        </span>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="contact-hospital-phone-label">
                        Phone number
                      </div>
                      <div className="contact-hospital-phone-value">
                        {h.phone}
                      </div>
                      <a
                        href={h.map}
                        className="contact-hospital-map-link d-block mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View location in map
                      </a>
                    </div>
                  </div>
                  <hr className="my-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row g-2 g-md-4 ">
          {/* LEFT - Menu */}
          <div className="col-md-4 col-lg-4">
            <div className="contact-location-menu pt-3 pb-3">
              {LOCATIONS.map((group) => (
                <div key={group.group}>
                  {/* Group Heading */}
                  <button
                    className={`contact-location-group-btn${
                      openGroup === group.group ? " open" : ""
                    }`}
                    type="button"
                    onClick={() => setOpenGroup(group.group)}
                  >
                    {group.group}
                    <span className="contact-location-group-arrow arrow_">
                      ›
                    </span>
                  </button>
                  {/* Dropdown Items */}
                  {openGroup === group.group && (
                    <ul className="contact-location-list">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <button
                            className={`contact-location-list-btn${
                              selectedItem === item.label ? " active" : ""
                            }`}
                            onClick={() => setSelectedItem(item.label)}
                            type="button"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Details */}
          <div className="col-md-8 col-lg-8">
            <div className="contact-location-detail p-1 p-md-4">
              {currentDetail && (
                <div className="row g-3 mt-0 mt-md-1">
                  <div className="col-8">
                    <div className="contact-hospital-title">
                      {currentDetail.name}
                    </div>
                    <div className="contact-hospital-address mt-3">
                      {currentDetail.address}
                    </div>
                    {currentDetail.email && (
                      <div className="contact-hospital-label">
                        email:{" "}
                        <span className="contact-hospital-email">
                          {currentDetail.email}
                        </span>
                      </div>
                    )}
                    <div className="contact-hospital-label">
                      <span>Opening Hours:</span>{" "}
                      <span className="contact-hospital-hours">
                        {currentDetail.opening}
                      </span>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="contact-hospital-phone-label">
                      Phone number
                    </div>
                    <div className="contact-hospital-phone-value">
                      {currentDetail.phone}
                    </div>
                    <a
                      href={currentDetail.map}
                      className="contact-hospital-map-link d-block mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View location in map
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <ContactForm></ContactForm>
        </div>
      </div>

      <div className="dummy"></div>
    </section>
  );
}
