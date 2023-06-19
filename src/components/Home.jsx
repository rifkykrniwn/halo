// import { AiFillFileText } from "react-icons/ai";

import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import realProfile from "../assets/img/Profile.jpg";

// import CVDoc from "../assets/download/CV.pdf";
import Hi from "../assets/img/Hi.gif";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./CSS/Home.css";

function Home() {
  function setAvatarAnimation() {
    setImage(realProfile);
  }
  const [image, setImage] = useState(realProfile);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Rifki - Home</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft">
          <h3>
            Hi there <img width="35" src={Hi} alt="Hi" />, my name is
          </h3>
          <h2>
            <span className="name-hover">Muhammad</span>
            <br />
            <span className="name-hover">Rifki Kurniawan</span>
          </h2>
          <NavLink to="/contact" className="btn-download text-center">
            Let's Connect
          </NavLink>
          {/* <AiFillFileText /> */}
          {/* &nbsp;&nbsp;Hire Me */}
        </div>
        <div className="home-right animate__animated animate__fadeIn animate__slower">
          <img
            className="home-image"
            src={image}
           
            alt="Avatar"
          />
        </div>
      </Container>
    </>
  );
}

export default Home;
