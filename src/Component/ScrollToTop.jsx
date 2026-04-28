import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    let start = window.scrollY;
    const duration = 500; // 👈 speed (ms)
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      window.scrollTo(0, start * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }, [pathname]);

  return null;
}