import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { useIsMobile } from "../hooks/useIsMobile";
import SEO from "../components/SEO";

const HomePage = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <SEO 
        title="Home"
        description="Hi, I'm Topan Nurpana - Software Developer specializing in web development, with experience in both backend and frontend technologies. Get in touch to discuss your next project."
        keywords="Topan Nurpana, software developer, web development, frontend, backend, React, JavaScript, portfolio"
        url="https://your-domain.com/"
      />
      <div className="hero-content">
        {isMobile ? (
          <Parallax y={[-20, 20]} className="parallax-hero">
            <h1 className="main-heading">
              Hi, I'm <span className="name-highlight">Topan Nurpana</span>
            </h1>
          </Parallax>
        ) : (
          <h1 className="main-heading">
            Hi, I'm <span className="name-highlight">Topan Nurpana</span>
          </h1>
        )}
        
        {isMobile ? (
          <Parallax y={[-10, 10]} className="parallax-subtitle">
            <p className="sub-heading">Software Developer specializing in web development, with experience in both backend and frontend technologies.</p>
          </Parallax>
        ) : (
          <p className="sub-heading">Software Developer specializing in web development, with experience in both backend and frontend technologies.</p>
        )}
        
        {isMobile ? (
          <Parallax y={[-5, 5]} className="parallax-buttons">
            <div className="hero-buttons">
              <Link to="/contact" className="contact-btn">Get in Touch</Link>
              <Link to="/portfolio" className="portfolio-btn">View My Work</Link>
            </div>
          </Parallax>
        ) : (
          <div className="hero-buttons">
            <Link to="/contact" className="contact-btn">Get in Touch</Link>
            <Link to="/portfolio" className="portfolio-btn">View My Work</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage; 