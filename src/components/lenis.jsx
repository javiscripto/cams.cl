import Lenis from "lenis";
import { useRef } from "react";
import { useEffect } from "react";

export const LenisScroll = ({ children }) => {
  const container = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <div ref={container}>{children}</div>;
};
