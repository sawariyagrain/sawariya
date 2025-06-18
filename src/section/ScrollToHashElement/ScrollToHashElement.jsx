// ScrollToHashElement.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // scroll to element smoothly
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Optional: Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
};

export default ScrollToHashElement;
