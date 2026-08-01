import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the top of the page whenever the route changes, so navigating
// between tabs always starts at the top.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
