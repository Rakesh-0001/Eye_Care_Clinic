"use client";

import { useState } from "react";
import Image from "next/image";

const faces = [
  {
    id: "girl",
    img: "/assets/Images/Opticals-images/1.png",
    alt: "Girl",
    glassOverlay: { top: 10, left: -15, width: 270, height: 190 },
  },
  {
    id: "man1",
    img: "/assets/Images/Opticals-images/2.png",
    alt: "Man 1",
    glassOverlay: { top: 5, left: -10, width: 270, height: 170 },
  },
  {
    id: "man2",
    img: "/assets/Images/Opticals-images/4.png",
    alt: "Man 2",
    glassOverlay: { top: -10, left: -10, width: 270, height: 170 },
  },
];

const glasses = [
  { id: "g1", img: "/assets/Images/Glasses/1.png", alt: "Glasses 1" },
  { id: "g2", img: "/assets/Images/Glasses/2.png", alt: "Glasses 2" },
  { id: "g3", img: "/assets/Images/Glasses/3.png", alt: "Glasses 3" },
];

const opticsBrands = [
  {
    title: "Anjana Opticals – Branded Quality at Competitive Prices",
    description:
      "Established in 2002 at our main hospital, Anjana Opticals is trusted for its wide range of premium branded frames and lenses. We combine style with superior vision care, ensuring each pair of glasses meets high optical standards at reasonable rates. Our team helps you choose frames that not only enhance your sight but also complement your personality.",
  },
  {
    title: "A1 Opticals – Affordable Vision for All",
    description:
      "A1 Opticals is our initiative to make clear vision accessible to all. We provide economical frames and fitted lenses at low-cost or subsidized prices during eye camps and in the hospital. This service supports our mission of inclusive eye care, helping those in need see the world more clearly.",
  },
  {
    title: "Mavadi Opticals – Premium Eyewear with a Personal Touch",
    description:
      "Located at our Mavadi branch, Mavadi Opticals offers a curated collection of high-end frames and lenses, backed by expert consultation. Whether you need progressive lenses, lightweight frames, or specialized coatings, our optical team provides customized solutions for lasting comfort and clarity.",
  },
];

const images = [
  {
    src: "/assets/Images/Opticals-images/Eyewear-1.jpg",
    alt: "Eyewear 1",
  },
  {
    src: "/assets/Images/Opticals-images/Eyewear-2.jpg",
    alt: "Eyewear 2",
  },
  {
    src: "/assets/Images/Opticals-images/Eyewear-3.jpg",
    alt: "Eyewear 3",
  },
  {
    src: "/assets/Images/Opticals-images/Eyewear-4.jpg",
    alt: "Eyewear 4",
  },
];

export default function opticals() {
  const [selectedFace, setSelectedFace] = useState(faces[0]);
  const [selectedGlasses, setSelectedGlasses] = useState(glasses[0]);
  const [anim, setAnim] = useState(false);

  const onSelectFace = (face) => {
    setSelectedFace(face);
    setAnim(false);
    setTimeout(() => setAnim(true), 20);
  };

  const onSelectGlasses = (glass) => {
    setSelectedGlasses(glass);
    setAnim(false);
    setTimeout(() => setAnim(true), 20);
  };

  return (
    <div className="institution-page mb-5">
      <section className="contact-content-section">
        <div className="scrollable-content">
          <section className="contact-header">
            <div className="container mt-3">
              <h1 className="contact-title-custom text-end mb-1">
                <span className="contact-heading-green">Opticals</span>
              </h1>
            </div>
          </section>
          <div className="container py-5 institution-container">
            <div className="contact-page-breadcrumb ms-3">• Opticals</div>
          </div>
        </div>
      </section>

      <section className="opticals-section">
        <div className="container">
          <div className="row align-items-end mb-3">
            <div className="col-12 col-lg-7">
              <h1 className="opticals-title">
                <span className="see-blue">See Better.</span>
                <br />
                <span className="see-blue">Look Better.</span>
              </h1>
            </div>
          </div>
          <div className="row faces-main-row mt-1">
            {/* Left side: small girl */}
            <div className="col-2 d-none d-lg-flex flex-column justify-content-center align-items-center">
              <div
                className={
                  "face-thumb mb-3" +
                  (selectedFace.id === "girl" ? " active-face" : "")
                }
                onClick={() => onSelectFace(faces[0])}
                tabIndex={0}
              >
                <Image
                  src={faces[0].img}
                  alt={faces[0].alt}
                  width={90}
                  height={96}
                  className="thumb-img"
                  style={{ borderRadius: 24 }}
                />
              </div>
            </div>
            {/* Center: main face with glasses */}
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div className="main-face-wrap position-relative">
                <Image
                  src={selectedFace.img}
                  alt={selectedFace.alt}
                  width={400}
                  height={450}
                  className="main-face-img"
                  style={{ borderRadius: 36 }}
                  priority
                />
                {selectedGlasses && (
                  <Image
                    src={selectedGlasses.img}
                    alt={selectedGlasses.alt}
                    width={selectedFace.glassOverlay.width}
                    height={selectedFace.glassOverlay.height}
                    className={
                      "glasses-overlay" + (anim ? " glasses-anim" : "")
                    }
                    style={{
                      position: "absolute",
                      left: selectedFace.glassOverlay.left,
                      top: selectedFace.glassOverlay.top,
                      width: selectedFace.glassOverlay.width,
                      height: selectedFace.glassOverlay.height,
                    }}
                    onLoad={() => setAnim(true)}
                  />
                )}
              </div>
            </div>
            {/* Right side: men thumbnails */}
            <div className="col-4 d-flex flex-column align-items-center justify-content-between">
              {faces.slice(1).map((face, i) => (
                <div
                  key={face.id}
                  className={
                    "face-thumb mb-3" +
                    (selectedFace.id === face.id ? " active-face" : "")
                  }
                  onClick={() => onSelectFace(face)}
                  tabIndex={0}
                  style={{ marginBottom: i === 0 ? 32 : 0 }}
                >
                  <Image
                    src={face.img}
                    alt={face.alt}
                    width={90}
                    height={96}
                    className="thumb-img"
                    style={{ borderRadius: 24 }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Glasses chooser */}
          <div className="row mt-4 Glasses-chooser mb-5 ">
            <div className="col-12 d-flex align-items-center">
              <span className="branded-text">Our branded partners</span>
              <div className="glass-chooser-wrap d-flex align-items-center ms-4">
                {glasses.map((glass) => (
                  <div
                    key={glass.id}
                    className={
                      "glass-box" +
                      (selectedGlasses.id === glass.id ? " active-glass" : "")
                    }
                    onClick={() => onSelectGlasses(glass)}
                    tabIndex={0}
                  >
                    <Image
                      src={glass.img}
                      alt={glass.alt}
                      width={80}
                      height={32}
                      className="glass-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="opticals-brands-section   py-5">
        <div className="container">
          <div className="row align-items-start mt-5">
            {/* Left side: title and arrow */}
            <div className="col-lg-3 col-md-4 col-12 d-flex flex-column align-items-center align-items-lg-start mb-4 mb-lg-0">
              <span className="opticals-left-title mb-4">
                Our opticl
                <span
                  style={{
                    display: "inline-block",
                    transform: "rotate(-2deg)",
                  }}
                >
                  s
                </span>
              </span>
              <div className="opticals-arrow-container d-flex align-items-center justify-content-center mt-2 mb-3">
                <div className="opticals-arrow-outer">
                  <Image
                    src="/assets/Images/Opticals-arrow.png"
                    alt="Arrow"
                    width={28}
                    height={28}
                    className="opticals-arrow-inner"
                  />
                </div>
              </div>
            </div>
            {/* Right side: brands mapped */}
            <div className="col-lg-9 col-md-8 col-12">
              {opticsBrands.map((item, idx) => (
                <div key={idx} className="opticals-brand-box">
                  <div className="opticals-brand-title">{item.title}</div>
                  <div className="opticals-brand-desc">{item.description}</div>
                  {idx !== opticsBrands.length - 1 && (
                    <div className="opticals-brand-divider"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="eyewear-gallery-section py-5">
        <div className="container-fluid eyewear-gallery-container ">
          <div className="row p-2 ">
            {/* Left: Title and Main Image */}
            <div className="col-lg-4 col-12 d-flex flex-column justify-content-start align-items-lg-start align-items-center">
              <h2 className="eyewear-title mb-4 mt-lg-3 text-lg-start text-center w-100">
                Eyewear that speaks style, lenses that speak clarity.
              </h2>
              <div className="eyewear-img-main-wrap mb-3">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  width={515}
                  height={646}
                  className="eyewear-img-main"
                  style={{ borderRadius: 56 }}
                />
              </div>
            </div>
            {/* Right: Stacked Image Grid and Text */}
            <div className="col-lg-8 col-12">
              <div className="row g-lg-4 g-2 align-items-start">
                {/* Top Image */}
                <div className="col-lg-12">
                  <div className="eyewear-img-top-wrap ">
                    <Image
                      src={images[2].src}
                      alt={images[2].alt}
                      width={688}
                      height={356}
                      className="eyewear-img-top-right"
                    />
                  </div>
                </div>
                {/* Middle: Small Image + Text */}
                <div className="col-lg-5 col-md-6 col-12 d-flex flex-column justify-content-start">
                  <div className="eyewear-img-small-left-wrap">
                    <Image
                      src={images[1].src}
                      alt={images[1].alt}
                      width={291}
                      height={392}
                      className="eyewear-img-small-left"
                    />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 col-12 d-flex flex-column justify-content-center">
                  <div className="eyewear-grid-text">
                    <div className="eyewear-vision-title">
                      Vision meets fashion
                    </div>
                    <div className="eyewear-vision-desc mt-2">
                      Experience crystal clear vision with lenses crafted for
                      precision and comfort, perfectly paired with frames that
                      reflect your unique style
                    </div>
                  </div>
                </div>
                {/* Bottom Image */}
                <div className="col-lg-12 mt-lg-4">
                  <div className="eyewear-img-bottom-wrap ">
                    <Image
                      src={images[0].src}
                      alt={images[0].alt}
                      width={682}
                      height={333}
                      className="eyewear-img-bottom-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-4 mb-3">
        <div className="faculty-intro-content">
          At Bejan Singh Eye Hospital, we believe that clear vision should be
          matched with comfort, style, and affordability. Our in-house optical
          centers provide a wide selection of quality eyewear to suit every
          need, lifestyle, and budget.
          <br />
          <br />
          Be it precision lenses after surgery or stylish frames for everyday
          wear, our experienced optical team is here to assist you. We operate
          three specialized optical outlets, each designed to meet the diverse
          needs of our community with dedication and care.
        </div>
      </section>
    </div>
  );
}
