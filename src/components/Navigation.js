import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, FileText, Briefcase, Mail, Linkedin, Github } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <>
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-letter">T</div>
        </div>
        <h2 className="name">Topan Nurpana</h2>
        <p className="title">Web Developer</p>
        
        <nav className="nav-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Me</Link>
          <Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
          <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </nav>
        
        <div className="social-icons">
          <button className="" aria-label="LinkedIn">
            <a href="https://www.linkedin.com/in/topan-nurpana/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </button>
          <button className="" aria-label="GitHub">
            <a href="https://github.com/TopsNoers" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </button>
        </div>
        
        <div className="scroll-indicator">
          <span>scroll down</span>
          <div className="arrow">↓</div>
        </div>
      </aside>

      {/* Bottom Tab Menu for Mobile */}
      <nav className="bottom-tab-menu">
        <Link to="/" className={`tab-item ${location.pathname === '/' ? 'active' : ''}`}>
          <div className="tab-icon">
            <Home size={20} />
          </div>
          <span>Home</span>
        </Link>
        <Link to="/about" className={`tab-item ${location.pathname === '/about' ? 'active' : ''}`}>
          <div className="tab-icon">
            <User size={20} />
          </div>
          <span>About</span>
        </Link>
        <Link to="/resume" className={`tab-item ${location.pathname === '/resume' ? 'active' : ''}`}>
          <div className="tab-icon">
            <FileText size={20} />
          </div>
          <span>Resume</span>
        </Link>
        <Link to="/portfolio" className={`tab-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
          <div className="tab-icon">
            <Briefcase size={20} />
          </div>
          <span>Portfolio</span>
        </Link>
        <Link to="/contact" className={`tab-item ${location.pathname === '/contact' ? 'active' : ''}`}>
          <div className="tab-icon">
            <Mail size={20} />
          </div>
          <span>Contact</span>
        </Link>
      </nav>
    </>
  );
};

export default Navigation; 