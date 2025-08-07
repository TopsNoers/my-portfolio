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
        url="https://profile.topdevs.my.id/"
      />
      <div className="hero-content">
        <div className="code-snippet code-html">{"<html/>"}</div>
        <div className="code-snippet code-body">{"<body>"}</div>
        <div className="code-snippet code-h1">{"<h1>"}</div>
        <div className="code-snippet code-p1">{`<p>Hi, I'm <span className="name-highlight">Topan Nurpana</span></p>`}</div>
        <div className="code-snippet code-p2">{`</p>`}</div>
        <div className="code-snippet code-a">{`<a href='/contact'>Get in Touch</a>`}</div>
        <div className="code-snippet code-a2">{`</a>`}</div>
        <div className="code-snippet code-a3">{`</h1>`}</div>
        <div className="code-snippet code-a4">{`</body>`}</div>
        <div className="code-snippet code-a5">{`</html>`}</div>
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