import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useIsMobile } from "../hooks/useIsMobile";
import SEO from "../components/SEO";

const PortfolioPage = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <SEO 
        title="Portfolio"
        description="Explore Topan Nurpana's portfolio featuring projects like Sales Monitoring System, Gothru New API, and Sistem Informasi Manajemen Sekolah. View web development and full stack projects."
        keywords="portfolio, projects, Sales Monitoring System, Gothru New API, Sistem Informasi Manajemen Sekolah, web development projects, full stack projects"
        url="https://your-domain.com/portfolio"
      />
      <div className="page-content">
        <div className="code-snippet code-html">{"<html/>"}</div>
        <div className="code-snippet code-body">{"<body>"}</div>
        <div className="code-snippet code-h1">{"<h1>"}</div>
        <div className="code-snippet code-p1">{`<p>Hi, I'm <span className="name-highlight">Topan Nurpana</span></p>`}</div>
        {isMobile ? (
          <Parallax y={[-15, 15]} className="parallax-title">
            <h2 className="page-title">Portfolio</h2>
          </Parallax>
        ) : (
          <h2 className="page-title">Portfolio</h2>
        )}
        
        {isMobile ? (
          <Parallax y={[-10, 10]} className="parallax-text">
            <p className="portfolio-intro">Coming soon! I'm currently working on some exciting projects that I'll be sharing here.</p>
          </Parallax>
        ) : (
          <p className="portfolio-intro">Coming soon! I'm currently working on some exciting projects that I'll be sharing here.</p>
        )}
        
        {isMobile ? (
          <Parallax y={[-8, 8]} className="parallax-portfolio">
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <h3>Sales Monitoring System</h3>
                <p>Sales Monitoring System is a system that allows you to monitor your sales data.</p>
              </div>
              <div className="portfolio-item">
                <h3>Gothru New API</h3>
                <p>Gothru New API is a API that allows you to get the data of the Gothru New.</p>
              </div>
              <div className="portfolio-item">
                <h3>Sistem Informasi Manajemen Sekolah</h3>
                <p>Sistem Informasi Manajemen Sekolah is a system that allows you to manage your school data.</p>
              </div>
              <div className="portfolio-item">
                <h3>Car Sales Information System</h3>
                <p>Car Sales Information System is a system that allows you to manage your car sales data.</p>
              </div>
              <div className="portfolio-item">
                <h3>CBT LMS School</h3>
                <p>CBT LMS School is e-learning system that allows you to manage your school data.</p>
              </div>
            </div>
          </Parallax>
        ) : (
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <h3>Sales Monitoring System</h3>
              <p>Sales Monitoring System is a system that allows you to monitor your sales data.</p>
            </div>
            <div className="portfolio-item">
              <h3>Gothru New API</h3>
              <p>Gothru New API is a API that allows you to get the data of the Gothru New.</p>
            </div>
            <div className="portfolio-item">
              <h3>Sistem Informasi Manajemen Sekolah</h3>
              <p>Sistem Informasi Manajemen Sekolah is a system that allows you to manage your school data.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioPage; 