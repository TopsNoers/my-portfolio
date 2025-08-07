import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useIsMobile } from "../hooks/useIsMobile";
import SEO from "../components/SEO";

const AboutPage = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <SEO 
        title="About"
        description="Learn more about Topan Nurpana - a full-time and freelance web developer with 2 years of experience in full stack development, teaching, and creative work."
        keywords="about Topan Nurpana, full stack developer, web developer, teaching assistant, photography, photo editing"
        url="https://your-domain.com/about"
      />
      <div className="page-content">
        {isMobile ? (
          <Parallax y={[-15, 15]} className="parallax-title">
            <h2 className="page-title">About Me</h2>
          </Parallax>
        ) : (
          <h2 className="page-title">About Me</h2>
        )}
        
        {isMobile ? (
          <Parallax y={[-10, 10]} className="parallax-text">
            <p className="about-text">
              I work as a full-time and freelance web developer. I have been working as a full stack developer for 2 year.
            </p>
          </Parallax>
        ) : (
          <p className="about-text">
            I work as a full-time and freelance web developer. I have been working as a full stack developer for 2 year.
          </p>
        )}
        
        {isMobile ? (
          <Parallax y={[-8, 8]} className="parallax-skills">
            <div className="skills-grid">
              <div className="skill-card">
                <h3>Backend Developer</h3>
              </div>
              <div className="skill-card">
                <h3>Frontend Developer</h3>
              </div>
              <div className="skill-card">
                <h3>Full Stack</h3>
              </div>
              <div className="skill-card">
                <h3>Web Developer</h3>
              </div>
            </div>
          </Parallax>
        ) : (
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Backend Developer</h3>
            </div>
            <div className="skill-card">
              <h3>Frontend Developer</h3>
            </div>
            <div className="skill-card">
              <h3>Full Stack</h3>
            </div>
            <div className="skill-card">
              <h3>Web Developer</h3>
            </div>
          </div>
        )}

        {isMobile ? (
          <Parallax y={[-12, 12]} className="parallax-section">
            <h3 className="section-title">What I Do</h3>
          </Parallax>
        ) : (
          <h3 className="section-title">What I Do</h3>
        )}
        
        {isMobile ? (
          <Parallax y={[-6, 6]} className="parallax-services">
            <div className="services-grid">
              <div className="service-item">
                <h4>Teaching</h4>
                <p>I have been teaching as a teaching assistant for 1 year.</p>
              </div>
              <div className="service-item">
                <h4>Full Stack Developer</h4>
                <p>I have been working as a full stack developer for 1 year. I have experience in building Rest API and Frontend.</p>
              </div>
              <div className="service-item">
                <h4>Editing Photos</h4>
                <p>I have been editing photos for 1 year with photoshop.</p>
              </div>
              <div className="service-item">
                <h4>Photography</h4>
                <p>I have been Photography just for fun.</p>
              </div>
            </div>
          </Parallax>
        ) : (
          <div className="services-grid">
            <div className="service-item">
              <h4>Teaching</h4>
              <p>I have been teaching as a teaching assistant for 1 year.</p>
            </div>
            <div className="service-item">
              <h4>Full Stack Developer</h4>
              <p>I have been working as a full stack developer for 1 year. I have experience in building Rest API and Frontend.</p>
            </div>
            <div className="service-item">
              <h4>Editing Photos</h4>
              <p>I have been editing photos for 1 year with photoshop.</p>
            </div>
            <div className="service-item">
              <h4>Photography</h4>
              <p>I have been Photography just for fun.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AboutPage; 