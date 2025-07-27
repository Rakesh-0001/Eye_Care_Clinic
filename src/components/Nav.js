"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {  navItems } from "../Datas/Navbar.js"; // Adjust the import path as necessary


export default function Nav() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  // For mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const handleMobileDropdown = (idx) =>
    setMobileDropdown(mobileDropdown === idx ? null : idx);

  return (
    <nav className="eyecare-navbar-wrap">
      <div className="eyecare-navbar d-flex align-items-stretch justify-content-between px-2 px-md-4">
        <Link
          className="navbar-brand eyecare-brand d-flex align-items-center me-4"
          href="/"
        >
          <img
            src="/Logo.png"
            alt="Logo"
            width={120}
            height={26}
            style={{ marginRight: 12 }}
          />
        </Link>
        <ul className="nav eyecare-nav-links d-none d-lg-flex flex-row align-items-end mx-4 flex-nowrap">
          {navItems.map((item, idx) => (
            <li
              key={item.href}
              className="nav-item d-flex align-items-center eyecare-nav-li"
              style={{ position: "relative", whiteSpace: "nowrap" }}
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                className={`nav-link text-white eyecare-nav-link${
                  pathname === item.href ? " active" : ""
                }`}
                href={item.href}
                style={{ textDecoration: item.dropdown ? "none" : "none" }}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div
                  className={`eyecare-dropdown-menu${
                    openDropdown === idx ? " show" : ""
                  }`}
                  style={{
                    pointerEvents: openDropdown === idx ? "auto" : "none",
                  }}
                >
                  {item.dropdown.map((drop, dIdx) => (
                    <Link
                      href={drop.href}
                      key={drop.href}
                      className="eyecare-dropdown-link"
                    >
                      {drop.label}
                    </Link>
                  ))}
                </div>
              )}
              {idx !== navItems.length - 1 && (
                <span className="eyecare-nav-separator mx-0">|</span>
              )}
            </li>
          ))}
        </ul>
        {/* Tablet+Mobile: Toggle + Book Now on right */}
        <div className="eyecare-tablet-actions d-flex align-items-center ms-auto">
          <button
            className="eyecare-mobile-toggle d-lg-none"
            aria-label="Toggle Mobile Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <i className="bi bi-list mobile-toggle-icon"></i>
          </button>
          <Link href="/book-now" className="eyecare-tablet-book-link d-none d-md-inline-block d-lg-none ms-2">
            <button className="btn btn-book-now-tablet text-white rounded-pill">
              Book Now
            </button>
          </Link>
        </div>
        {/* Off-canvas Mobile Menu */}
        <div className={`eyecare-mobile-menu-custom${mobileOpen ? " open" : ""}`}>
          <div className="eyecare-mobile-menu-header ">
            <Link href="/" className="navbar-brand eyecare-brand">
              <img src="/Logo.png" width={100} height={24} alt="Logo" />
            </Link>
            <button
              className="eyecare-mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <ul className="eyecare-mobile-nav-list">
            {navItems.map((item, idx) => (
              <li key={item.href}>
                {item.dropdown ? (
                  <>
                    <button
                      className="eyecare-mobile-dropdown-btn"
                      onClick={() => handleMobileDropdown(idx)}
                    >
                      <span>{item.label}</span>
                      <span className={`eyecare-arrow${mobileDropdown === idx ? " open" : ""}`}><i className="bi bi-chevron-down"></i></span>
                    </button>
                    <ul
                      className={`eyecare-mobile-dropdown-list${mobileDropdown === idx ? " show" : ""}`}
                    >
                      {item.dropdown.map((drop) => (
                        <li key={drop.href}>
                          <Link
                            href={drop.href}
                            className={`eyecare-mobile-link  ${pathname === drop.href ? " active" : ""}`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {drop.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`eyecare-mobile-link ${pathname === item.href ? " active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="eyecare-mobile-book-btn-wrap ">
            <Link href="/book-now">
              <button className="btn  btn-book-now-mobile text-white rounded-pill w-100">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        {/* Overlay for mobile menu */}
        {mobileOpen && (
          <div
            className="eyecare-mobile-menu-overlay"
            onClick={() => setMobileOpen(false)}
          />
        )}
        {/* Desktop "Book Now" */}
        <Link href="/book-now" className="d-none d-lg-block">
          <button className="btn btn-success btn-book-now text-white rounded-pill">
            Book Now
          </button>
        </Link>
      </div>
    </nav>
  );
}