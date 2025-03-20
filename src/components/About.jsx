import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import { main } from "motion/react-client";

export default function About() {
  const mainText = "Heey there! I'm Adrien.";
  const subText = "I'm a web developer based in France.";
  const description =
    "I'm passionate about web development and learning new technologies, testing new things, or simply reading in my free time.";

  return (
    <div className="flex flex-col items-center gap-10 justify-center p-10 md:flex-row md:gap-20">
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
      <div>
        <h1 className="font-azeret text-5xl font-bold italic">
          <Typewriter speed={50} text={mainText} />
        </h1>
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
