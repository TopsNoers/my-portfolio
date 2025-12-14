import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useScrollNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);
  const isScrollingRef = useRef(false);
  const [isEnabled, setIsEnabled] = useState(true);

  // Define the page order for navigation
  const pages = useMemo(() => [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/resume", name: "Resume" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/contact", name: "Contact" }
  ], []);

  // Get current page index
  const getCurrentPageIndex = useCallback(() => {
    return pages.findIndex(page => page.path === location.pathname);
  }, [pages, location.pathname]);

  // Check if current page has scrollable content
  const hasScrollableContent = () => {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return false;
    
    // Check if the content is scrollable with a small threshold to account for rounding
    const scrollHeight = mainContent.scrollHeight;
    const clientHeight = mainContent.clientHeight;
    const isScrollable = scrollHeight > clientHeight + 1; // Add 1px threshold for rounding issues
    
    return isScrollable;
  };

  // Check if we should allow normal scrolling
  const shouldAllowNormalScroll = (deltaY) => {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return false;
    
    const currentScrollTop = mainContent.scrollTop;
    const scrollHeight = mainContent.scrollHeight;
    const clientHeight = mainContent.clientHeight;
    const maxScrollTop = scrollHeight - clientHeight;
    
    // If content is not scrollable, don't allow normal scroll
    if (maxScrollTop <= 0) return false;
    
    // Allow normal scrolling if:
    // 1. Content is scrollable
    // 2. We're not at the boundaries (with a small buffer)
    if (deltaY > 0) {
      // Scrolling down - allow if not at bottom
      return currentScrollTop < maxScrollTop - 10;
    } else {
      // Scrolling up - allow if not at top
      return currentScrollTop > 10;
    }
  };

  // Navigate to next page
  const goToNextPage = useCallback(() => {
    if (!isEnabled) return;
    
    const currentIndex = getCurrentPageIndex();
    const nextIndex = Math.min(currentIndex + 1, pages.length - 1);
    if (nextIndex !== currentIndex) {
      navigate(pages[nextIndex].path);
    }
  }, [isEnabled, navigate, pages, getCurrentPageIndex]);

  // Navigate to previous page
  const goToPreviousPage = useCallback(() => {
    if (!isEnabled) return;
    
    const currentIndex = getCurrentPageIndex();
    const prevIndex = Math.max(currentIndex - 1, 0);
    if (prevIndex !== currentIndex) {
      navigate(pages[prevIndex].path);
    }
  }, [isEnabled, navigate, pages, getCurrentPageIndex]);

  // Navigate to specific page
  const goToPage = useCallback((pageIndex) => {
    if (!isEnabled || pageIndex < 0 || pageIndex >= pages.length) return;
    navigate(pages[pageIndex].path);
  }, [isEnabled, navigate, pages]);

  // Reset scroll position when route changes
  useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleWheel = (event) => {
      // Don't handle scroll if disabled or if user is interacting with form elements
      if (!isEnabled || event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      // Determine scroll direction
      const deltaY = event.deltaY;
      const scrollThreshold = 30;

      // Check if we should allow normal scrolling
      if (hasScrollableContent() && shouldAllowNormalScroll(deltaY)) {
        // Allow normal scrolling within the page
        return;
      }

      // For pages with scrollable content, only navigate when at boundaries
      const mainContent = document.querySelector('.main-content');
      if (mainContent && hasScrollableContent()) {
        const currentScrollTop = mainContent.scrollTop;
        const scrollHeight = mainContent.scrollHeight;
        const clientHeight = mainContent.clientHeight;
        const maxScrollTop = scrollHeight - clientHeight;
        
        // Use a larger threshold to prevent accidental navigation
        const threshold = 10;
        
        if (deltaY > 0 && currentScrollTop < maxScrollTop - threshold) {
          // Not at bottom, allow normal scrolling
          return;
        }
        if (deltaY < 0 && currentScrollTop > threshold) {
          // Not at top, allow normal scrolling
          return;
        }
      }

      // Prevent default scroll behavior for page navigation
      event.preventDefault();
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set scrolling flag
      isScrollingRef.current = true;

      if (Math.abs(deltaY) > scrollThreshold) {
        if (deltaY > 0) {
          // Scrolling down - go to next page
          goToNextPage();
        } else {
          // Scrolling up - go to previous page
          goToPreviousPage();
        }
      }

      // Reset scrolling flag after a delay
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    };

    const handleKeyDown = (event) => {
      // Don't handle keys if disabled or if user is typing in form elements
      if (!isEnabled || event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      // Check if we should allow normal scrolling for arrow keys
      const mainContent = document.querySelector('.main-content');
      if (mainContent && hasScrollableContent()) {
        const currentScrollTop = mainContent.scrollTop;
        const scrollHeight = mainContent.scrollHeight;
        const clientHeight = mainContent.clientHeight;
        const maxScrollTop = scrollHeight - clientHeight;
        const threshold = 10;
        
        if ((event.key === "ArrowDown" || event.key === "PageDown") && currentScrollTop < maxScrollTop - threshold) {
          // Allow normal scrolling down
          return;
        }
        if ((event.key === "ArrowUp" || event.key === "PageUp") && currentScrollTop > threshold) {
          // Allow normal scrolling up
          return;
        }
      }

      // Handle arrow key navigation
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        goToNextPage();
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        goToPreviousPage();
      } else if (event.key === "Home") {
        event.preventDefault();
        goToPage(0);
      } else if (event.key === "End") {
        event.preventDefault();
        goToPage(pages.length - 1);
      }
    };

    const handleTouchStart = (event) => {
      // Store touch start position and scroll position for mobile swipe detection
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        const mainContent = document.querySelector('.main-content');
        
        event.target._touchStartY = touch.clientY;
        event.target._touchStartScrollTop = mainContent ? mainContent.scrollTop : 0;
        event.target._touchStartTime = Date.now();
      }
    };

    const handleTouchEnd = (event) => {
      if (!isEnabled) return;

      const touch = event.changedTouches[0];
      const startY = event.target._touchStartY;
      const endY = touch.clientY;
      const deltaY = startY - endY;
      const minSwipeDistance = 80; // Increased threshold for better accuracy
      const maxSwipeTime = 300; // Maximum time for a swipe gesture
      
      const touchDuration = Date.now() - (event.target._touchStartTime || 0);
      const mainContent = document.querySelector('.main-content');
      
      // Only handle as navigation if it's a quick swipe gesture
      if (Math.abs(deltaY) > minSwipeDistance && touchDuration < maxSwipeTime) {
        // Check if we should allow normal scrolling for touch
        if (mainContent && hasScrollableContent()) {
          const currentScrollTop = mainContent.scrollTop;
          const scrollHeight = mainContent.scrollHeight;
          const clientHeight = mainContent.clientHeight;
          const maxScrollTop = scrollHeight - clientHeight;
          const startScrollTop = event.target._touchStartScrollTop || 0;
          const threshold = 10;
          
          // If the scroll position changed significantly during the touch, 
          // it means the user was scrolling content, not trying to navigate
          const scrollDelta = Math.abs(currentScrollTop - startScrollTop);
          if (scrollDelta > threshold) {
            // User was scrolling content, don't navigate
            return;
          }
          
          // Only navigate if we're at the boundaries
          if (deltaY > 0) {
            // Swipe up - only navigate if at bottom
            if (currentScrollTop >= maxScrollTop - threshold) {
              goToNextPage();
            }
          } else {
            // Swipe down - only navigate if at top
            if (currentScrollTop <= threshold) {
              goToPreviousPage();
            }
          }
        } else {
          // No scrollable content, allow navigation
          if (deltaY > 0) {
            // Swipe up - go to next page
            goToNextPage();
          } else {
            // Swipe down - go to previous page
            goToPreviousPage();
          }
        }
      }
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location.pathname, navigate, isEnabled, goToNextPage, goToPreviousPage, goToPage, pages.length]);

  return {
    currentPage: pages[getCurrentPageIndex()],
    pages,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    isScrolling: isScrollingRef.current,
    isEnabled,
    setIsEnabled
  };
}; 