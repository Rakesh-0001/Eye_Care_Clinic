"use client";
import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookAppointment from "@/components/BookAppointment";
import "../app/globals.css";
import "../../public/assets/Css/Nav.css";
import "../../public/assets/Css/Footer.css";
import "../../public/assets/Css/Contact.css";
import "../../public/assets/Css/Career.css";
import "../../public/assets/Css/JobDetails.css";
import "../../public/assets/Css/blog.css";
import "../../public/assets/Css/BlogDetails.css";
import "../../public/assets/Css/BookAppointment.css";
import "../../public/assets/Css/Doctor.css";
import "../../public/assets/Css/Institution.css";
import "../../public/assets/Css/Opticals.css";
import "../../public/assets/Css/Clinic.css";
import "../../public/assets/Css/hospital.css";
import "../../public/assets/Css/HospitalView.css";
import "../../public/assets/Css/InternationalPatients.css";
import "../../public/assets/Css/ContactForm.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['700'] });




export default function RootLayout({ children }) {


  return (
    <html className={`${inter.className} ${plusJakarta.className}`}>
     
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
       <link
        href="https://fonts.googleapis.com/css2?family=TikTok+Sans:opsz,wght@12..36,300..900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&display=swap"
        rel="stylesheet"
      /> 

      <body>
        <Nav />

        <main className="root-container">{children}</main>

        <BookAppointment />

        <Footer />

      
      </body>
    </html>
  );
}
