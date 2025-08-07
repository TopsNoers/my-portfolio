import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useIsMobile } from "../hooks/useIsMobile";
import SEO from "../components/SEO";

const ContactPage = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch with Topan Nurpana for web development projects, freelance opportunities, or collaborations. Located in Subang Jawa Barat, available for freelance work."
        keywords="contact, get in touch, freelance, web development, Topan Nurpana, Subang Jawa Barat, hire developer"
        url="https://your-domain.com/contact"
      />
      <div className="page-content">
      <div className="code-snippet code-html">{"<html/>"}</div>
        <div className="code-snippet code-body">{"<body>"}</div>
        <div className="code-snippet code-h1">{"<h1>"}</div>
        <div className="code-snippet code-p1">{`<p>Hi, I'm <span className="name-highlight">Topan Nurpana</span></p>`}</div>
        {isMobile ? (
          <Parallax y={[-15, 15]} className="parallax-title">
            <h2 className="page-title">Contact</h2>
          </Parallax>
        ) : (
          <h2 className="page-title">Contact</h2>
        )}
        
        {isMobile ? (
          <Parallax y={[-10, 10]} className="parallax-text">
            <p className="contact-intro">Feel free to reach out to me for any questions or opportunities.</p>
          </Parallax>
        ) : (
          <p className="contact-intro">Feel free to reach out to me for any questions or opportunities.</p>
        )}
        
        {isMobile ? (
          <Parallax y={[-8, 8]} className="parallax-contact">
            <div className="contact-info">
              <div className="contact-item">
                <h4>Location</h4>
                <p>Subang Jawa Barat</p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>+6289643647347</p>
              </div>
              <div className="contact-item">
                <h4>Availability</h4>
                <p>Freelance Available</p>
              </div>
            </div>
          </Parallax>
        ) : (
          <div className="contact-info">
            <div className="contact-item">
              <h4>Location</h4>
              <p>Subang Jawa Barat</p>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>+6289643647347</p>
            </div>
            <div className="contact-item">
              <h4>Availability</h4>
              <p>Freelance Available</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactPage; 