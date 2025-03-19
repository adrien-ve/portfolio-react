import { motion } from "framer-motion";

export default function About() {
  const mainText = "Howdy ! I'm Adrien.";
  const subText = "I'm a web developer based in France.";
  const description =
    "I'm passionate about web development and learning new technologies, testing new things, or simply reading in my free time.";

  return (
    <div className="flex flex-row items-center gap-10">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        style={{ ...ball, flexShrink: 0 }}
      >
        <img src="../src/assets/exape.jpg" alt="" />
      </motion.div>
      <div>
        <h1 className="text-5xl">{mainText}</h1>
        <h2 className="text-5xl text-gray-400">{subText}</h2>
        <p className="text-1xl text-gray-300 mt-4 leading-relaxed">
          {description}
        </p>
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
