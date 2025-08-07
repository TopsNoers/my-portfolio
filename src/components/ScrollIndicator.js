import React from "react";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

const ScrollIndicator = () => {
  const { currentPage, pages, goToNextPage, goToPreviousPage, goToPage } = useScrollNavigation();
  const currentIndex = pages.findIndex(page => page.path === currentPage.path);

  const handlePageDotClick = (pageIndex) => {
    goToPage(pageIndex);
  };

  return (
    <div className="scroll-indicator-container">
      {/* Page Dots */}
      <div className="page-dots">
        {pages.map((page, index) => (
          <div
            key={page.path}
            className={`page-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handlePageDotClick(index)}
            title={page.name}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="scroll-navigation">
        <button
          className="nav-arrow nav-up"
          onClick={goToPreviousPage}
          disabled={currentIndex === 0}
          title="Previous Page"
        >
          ↑
        </button>
        <div className="current-page">
          {currentPage.name}
        </div>
        <button
          className="nav-arrow nav-down"
          onClick={goToNextPage}
          disabled={currentIndex === pages.length - 1}
          title="Next Page"
        >
          ↓
        </button>
      </div>

      {/* Scroll Hint */}
      <div className="scroll-hint">
        <span>Scroll to navigate</span>
        <div className="scroll-arrows">
          <span>↑</span>
          <span>↓</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator; 