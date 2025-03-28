import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

export default function About() {
  // Text used
  const mainText = "Heey there! I'm Adrien.";
  const subText = "I'm a web developer based in France.";
  const description =
    "I'm passionate about web development and learning new technologies, testing new things, or simply reading in my free time.";

  return (
    <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20 md:items-start md:p-10">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        style={{ ...ball, flexShrink: 0 }}
      >
        <img src="../src/assets/adrien.jpg" alt="" />
      </motion.div>
      {/* Text */}
      <div className="text-center md:text-left">
        <h1 className="font-azeret text-5xl font-bold italic">
          <Typewriter text={mainText} />
        </h1>
        <h2 className="text-2xl font-semibold mt-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            {subText}
          </motion.div>
        </h2>
        <div className="text-lg mt-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <p>{description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const ball = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  backgroundColor: "transparent",
  overflow: "hidden",
};
