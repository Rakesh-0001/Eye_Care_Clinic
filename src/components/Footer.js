import Link from "next/link";

export default function Footer() {
  return (
    <footer className="eyecare-footer">
      <div className="container">
        <div className="row gy-4 align-items-start p-2 p-md-0 ">
          {/* Logo and description */}
          <div className="col-12 col-md-3 mb-3 mb-md-0  text-md-start">
            <div className="eyecare-footer-logo w-100  mb-2">
              <img src="/Logo.png" alt="Bejan Singh" width={130} height={30} />
            </div>
            <div className="eyecare-footer-desc mb-3">
              The ultimate destination for all of your medical needs
            </div>
            <div className="eyecare-footer-social d-flex align-items-center gap-3 justify-content-start justify-content-md-start  justify-content-lg-start">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          {/* Explore */}
          <div className="col-12 col-md-3 mb-3 mb-md-0  text-md-start">
            <h6 className="eyecare-footer-title">Explore</h6>
            <ul className="eyecare-footer-list">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/surgery" className="footer-link">Surgery</Link></li>
              <li><Link href="/opd" className="footer-link">OPD</Link></li>
              <li><Link href="/speciality" className="footer-link">Speciality</Link></li>
              <li><Link href="/consultation" className="footer-link">Consultation</Link></li>
            </ul>
          </div>
          {/* About Us */}
          <div className="col-12 col-md-3 mb-3 mb-md-0 text-md-start">
            <h6 className="eyecare-footer-title">About Us</h6>
            <ul className="eyecare-footer-list">
              <li><Link href="/about" className="footer-link">Who we are</Link></li>
              <li><Link href="/about#vision" className="footer-link">Our Vision</Link></li>
              <li><Link href="/about#team" className="footer-link">Our Team</Link></li>
              <li><Link href="/terms" className="footer-link">Terms & Conditions</Link></li>
              <li><Link href="/faqs" className="footer-link">FAQs</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div className="col-12 col-md-3  text-md-start">
            <h6 className="eyecare-footer-title">Contact</h6>
            <div className="eyecare-footer-contact">
              <div>+923041234567</div>
              <div>favorite@doctor.com</div>
              <div>Glassplace, Near<br />Cool Avenue, Boson</div>
            </div>
          </div>
        </div>
        <div className="row mt-4 p-2 p-md-0 ">
          <div className="col text-center eyecare-footer-copyright mt-5 mb-4">
            Copyright 2025 Favorite Doctor, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}