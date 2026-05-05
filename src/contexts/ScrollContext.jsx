

import Lenis from "lenis";
import React, { useEffect, useRef, useState } from "react";

const SmoothScrollerContext = React.createContext(null);

export const useSmoothScroller = () =>
  React.useContext(SmoothScrollerContext);


const ScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const startLenis = () => {
      if (lenisRef.current) return;

      const instance = new Lenis({
        duration: 1.2,
        easing: (t) =>
          Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        infinite: false,
        autoResize: true,
      });

      lenisRef.current = instance;

      const raf = (time) => {
        if (!lenisRef.current) return;
        lenisRef.current.raf(time);
        rafRef.current = window.requestAnimationFrame(raf);
      };

      rafRef.current = window.requestAnimationFrame(raf);

      forceUpdate((v) => v + 1);
    };

    const stopLenis = () => {
      if (!lenisRef.current) return;

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      lenisRef.current.destroy();
      lenisRef.current = null;

      forceUpdate((v) => v + 1);
    };

    const handleChange = () => {
      if (mediaQuery.matches) {
        startLenis();
      } else {
        stopLenis();
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      stopLenis();
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={lenisRef.current}>
      {children}
    </SmoothScrollerContext.Provider>
  );
};

export default ScrollProvider;
