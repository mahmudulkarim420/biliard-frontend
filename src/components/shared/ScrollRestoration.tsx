import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that resets scroll position to top on every route change.
 * This is essential for Single Page Applications (SPAs) to ensure
 * new pages don't inherit the scroll position of the previous page.
 */
const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly on route change
    // Using a tiny delay or requestAnimationFrame can help ensure 
    // it works even during complex route transitions on mobile.
    const scroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as ScrollBehavior,
      });
    };

    // Trigger immediately
    scroll();

    // Also trigger after a short delay to catch any layout shifts during transitions
    const timeoutId = setTimeout(scroll, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
