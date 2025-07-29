export default function eyecamp() {
  return (
    <section className="contact-content-section ">
      <section className="contact-header ">
        <div className="container mt-3">
          <h1 className="contact-title-custom text-end mb-1">
            <span className="contact-heading-green">Eye</span>{" "}
            <span className="contact-heading-white">Camp</span>
          </h1>
        </div>
      </section>
      <div className="container container_ py-5 ">
        <div className="contact-page-breadcrumb ms-1 ms-md-3">
          <span>• Eye Camp</span>
        </div>
        <section className="teleophthalmology-section my-5">
          <div className="teleophthalmology-bg">
            <div className="teleophthalmology-overlay m-4">
              <div className="teleophthalmology-content mx-auto">
                <h2 className="teleophthalmology-title">
                  Teleophthalmology: Bringing Expert Eye Care to Remote Areas
                </h2>
                <p className="teleophthalmology-desc mb-0">
                  To enhance diagnosis and treatment in remote locations, all
                  our Vision Centers and two Mobile Eye Units are connected to
                  the base hospital using Teleophthalmology technology.
                  <br />
                  With support from the Indian Space Research Organization
                  (ISRO), which donated V-SAT equipment and free bandwidth, our
                  specialists can provide expert consultations and real-time
                  evaluations, even in the most distant areas.
                  <br />
                  This technology-driven approach ensures timely care, early
                  detection, and improved outcomes, effectively bringing expert
                  eye care to every corner.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="clinic-images-section">
          <div className="clinic-row">
            <div className="clinic-col">
              <img
                src="/assets/Images/Eye-Camp/docter-patient-1.jpg"
                alt="Clinic 1"
                className="clinic-img clinic-img-large"
              />
              <img
                src="/assets/Images/Eye-Camp/docter-patient-4.jpg"
                alt="Clinic 2"
                className="clinic-img clinic-img-small"
              />
            </div>
            <div className="clinic-col">
              <img
                src="/assets/Images/Eye-Camp/docter-patient-3.jpg"
                alt="Clinic 3"
                className="clinic-img clinic-img-tall"
              />
            </div>
            <div className="clinic-col">
              <img
                src="/assets/Images/Eye-Camp/docter-patient-2.jpg"
                alt="Clinic 4"
                className="clinic-img clinic-img-vertical"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
