// File: InternationalPatientForm.jsx
import { useRef } from "react";


export default function InternationalPatientForm() {
  const formRef = useRef();

  return (
    <section className="international-form-section py-5">
      <div className="international-form-bg-wrapper">
        <div className="international-form-bg-img" />
        <div className="international-form-overlay" />
        <div className="international-form-card">
          <form ref={formRef} className="international-form-inner">
            <input type="text" className="form-control custom-input mb-3" placeholder="Name" />
            <input type="number" className="form-control custom-input mb-3" placeholder="Age" />
            <select className="form-control custom-input mb-3">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input type="tel" className="form-control custom-input mb-3" placeholder="phone number" />
            <select className="form-control custom-input mb-3">
              <option value="">Select treatment</option>
              <option>Cataract Surgery</option>
              <option>Corneal Transplant</option>
              <option>Oculoplasty & Cosmetic Eye Surgery</option>
              <option>Pediatric Eye Care & Squint Correction</option>
              <option>Refractive Surgery</option>
              <option>Retina Treatment</option>
              <option>Glaucoma Treatment and Surgery</option>
            </select>
            <input type="email" className="form-control custom-input mb-3" placeholder="Email id" />
            <div className="custom-file-upload mb-3">
              <label>Upload passport</label>
              <input type="file" className="form-control custom-input" />
            </div>
            <div className="custom-file-upload mb-3">
              <label>Upload medical report</label>
              <input type="file" className="form-control custom-input" />
            </div>
            <textarea
              className="form-control custom-input custom-message"
              placeholder="Message"
              rows={2}
            />
            <div className="form-terms mb-2">
              By submitting this form, I agree to Bejan Singh Eye Hospital's Terms & Conditions and Privacy Policy. I consent to receive updates and notifications via Email, WhatsApp and SMS.
            </div>
            <button type="submit" className="form-submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}