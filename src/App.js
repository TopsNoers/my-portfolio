// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { HelmetProvider } from "react-helmet-async";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

// Import components
import Navigation from "./components/Navigation";
import ScrollNavigationWrapper from "./components/ScrollNavigationWrapper";
import { 
  HomePage, 
  AboutPage, 
  ResumePage, 
  PortfolioPage, 
  ContactPage 
} from "./pages";

gsap.registerPlugin(ScrollTrigger);

// Main App Component
export default function App() {
  return (
    <HelmetProvider>
      <ParallaxProvider>
        <Router>
          <ScrollNavigationWrapper>
            <div className="portfolio-container">
              {/* Code snippets */}
              <div className="code-snippet code-html">{"<html/>"}</div>
              <div className="code-snippet code-body">{"<body>"}</div>
              <div className="code-snippet code-h1">{"<h1>"}</div>
              <div className="code-snippet code-p1">{"<p>"}</div>
              <div className="code-snippet code-p2">{"</p>"}</div>
              
              {/* Navigation */}
              <Navigation />

              {/* Main Content */}
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
                
                <div className="scroll-indicator main-scroll">
                  <span>scroll down</span>
                  <div className="arrow">↓</div>
                </div>
              </main>
            </div>
          </ScrollNavigationWrapper>
        </Router>
      </ParallaxProvider>
    </HelmetProvider>
  );
}
