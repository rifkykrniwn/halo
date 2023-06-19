import FsLightbox from "fslightbox-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "./CSS/About.css";
import certificateImages from "../assets/Routes/AllCertificate";

function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Rifki - About</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={certificateImages}
        slide={lightboxController.slide}
      />
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
          I am an Information System student at Mercu Buana University, Yogyakarta.
          I learn new things quickly and work hard. I'm interested in learning how to build a website,
          like how to make it look good (Frontend), how to make it work well (Backend),
          and how to do both (Fullstack). If you want to know more about this, let me know!
          </p>

          <h4>Certificates</h4>
          <span>─────</span>
          <div className="certificates-wrapper">
            {certificateImages.reduce((rows, src, index) => {
              if (index % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(
                <div className="col certificates-ratio gap-image" key={src}>
                  <img
                    className="shadow"
                    loading="lazy"
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    onClick={() => openLightboxOnSlide(index + 1)}
                  />
                </div>
              );
              return rows;
            }, []).map((row, index) => (
              <div className="row my-4" key={index}>
                {row}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;