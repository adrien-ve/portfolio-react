import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const Scrollbar = () => {
  // Observing scroll
  const { scrollYProgress } = useScroll();

  // Implementing some "lag" animations
  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Check if I have a scrollbar on the page
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useEffect(() => {
    const checkScrollbar = () =>
      setHasScrollbar(
        document.documentElement.scrollHeight > window.innerHeight
      );
    checkScrollbar();
    window.addEventListener("resize", checkScrollbar);
    return () => window.removeEventListener("resize", checkScrollbar);
  }, []);

  // Display it, or not
  if (!hasScrollbar) return null;

  return (
    <motion.div
      style={{
        scaleX: spring,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#64ffda",
      }}
    />
  );
};

export default Scrollbar;
