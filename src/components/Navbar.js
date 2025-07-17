"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const navItems = [
  { href: "/eye-care", label: "Eye care division" },
  { href: "/consult", label: "Consult & cure" },
  { href: "/patient-care", label: "Patient care" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef(null);

  // Fixed nav on scroll
  useEffect(() => {
    const nav = navRef.current;
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            nav.classList.add("nav-fixed", "nav-animate" );
          } else {
            nav.classList.remove("nav-fixed", "nav-animate" ,"back");
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  

  return (
    <nav className="eyecare-navbar-wrap " >
      <div className="eyecare-navbar d-flex align-items-stretch justify-content-between px-2 p-2 px-md-4" ref={navRef} >
        {/* Logo left */}
        <Link
          className="navbar-brand eyecare-brand d-flex align-items-center me-4"
          href="/"
        >
          <img
            src="/Logo.png"
            alt="Logo"
            width={130}
            height={30}
            style={{ marginRight: 12 }}
          />
        </Link>
        {/* Navigation links with vertical separators */}
        <ul className="nav eyecare-nav-links d-none d-lg-flex flex-row align-items-center mx-1 flex-nowrap">
          {navItems.map((item, idx) => (
            <li
              key={item.href}
              className="nav-item d-flex align-items-center"
              style={{ whiteSpace: "nowrap" }}
            >
              <Link
                className={`nav-link text-white eyecare-nav-link${
                  pathname === item.href ? " active" : ""
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
              {/* Show separator except after last link */}
              {idx !== navItems.length - 1 && (
                <span className="eyecare-nav-separator mx-0">|</span>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile toggler */}
        <input
          type="checkbox"
          className="d-lg-none eyecare-nav-toggle"
          id="eyecare-nav-toggle"
        />
        <label
          htmlFor="eyecare-nav-toggle"
          className="d-lg-none eyecare-nav-toggle-label"
        >
          <span />
          <span />
          <span />
        </label>
        <div className="eyecare-mobile-menu d-lg-none">
          <ul className="nav flex-column">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  className={`nav-link eyecare-nav-link${
                    pathname === item.href ? " active" : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Book Now Button */}
        <Link href="/book-now" >
        <button className="btn btn-success btn-book-now text-white  rounded-pill">

          Book Now 
        </button>
        </Link>
      </div>
    </nav>
  );
}
