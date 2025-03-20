import useTypewriter from "../utils/useTypewriter.js";

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <>{displayText}</>;
};

export default Typewriter;
