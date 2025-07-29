export default function Home() {
  return (
    <div className="container text-black py-5">
      <section className="trusted-section">
        <div className="row align-items-start">
          {/* Left: Heading */}
          <div className="col-lg-7 col-md-12 trusted-title-col">
            <h2 className="trusted-title">
              Bejan Singh Eye Hospital – Trusted Ophthalmology Center in South
              Tamil Nadu
            </h2>
          </div>
          {/* Right: Description */}
          <div className="col-lg-5 col-md-12 trusted-desc-col">
            <div className="trusted-desc">
              Bejan Singh Eye Hospital stands as a center of excellence in
              ophthalmic care, offering advanced diagnostic and treatment
              services across all eye care specialties. Our dedicated team of
              expert doctors and staff ensure that every patient receives
              attentive, personalized care in a safe and well-equipped
              environment.
              <br />
              <br />
              With a reputation built on trust, precision, and compassion, we
              are committed to delivering reliable, high-quality eye care that
              meets international standards. Whether it’s routine eye exams or
              complex surgical procedures, patients choose us for our expertise,
              integrity, and unwavering focus on protecting and enhancing
              vision.
            </div>
            <div className="trusted-desc-footer d-flex justify-content-end align-items-center">
              <a href="#" className="trusted-view-more">
                View more <span className="trusted-arrow">→</span>
              </a>
            </div>
            <hr className="trusted-desc-hr" />
          </div>
        </div>
      </section>

      <div className="stats-highlight-bar-outer">
        <section className="stats-highlight-bar ">
          <div className="stats-highlight-inner row align-items-center justify-content-between">
            <div className="col-auto stats-item ">
              <div className="stats-value">167+</div>
              <div className="stats-label">Doctors</div>
            </div>
            <div className="col-auto stats-divider-col">
              <span className="stats-divider"></span>
            </div>
            <div className="col-auto stats-item">
              <span className="stats-value">7000+</span>
              <span className="stats-label">Patients</span>
            </div>
            <div className="col-auto stats-divider-col">
              <span className="stats-divider"></span>
            </div>
            <div className="col-auto stats-item">
              <span className="stats-value">100+</span>
              <span className="stats-label">Cataract Suites</span>
            </div>
            <div className="col-auto stats-divider-col">
              <span className="stats-divider"></span>
            </div>
            <div className="col-auto stats-item">
              <span className="stats-value">200+</span>
              <span className="stats-label">Retina</span>
            </div>
          </div>
        </section>
      </div>

    
    </div>
  );
}
