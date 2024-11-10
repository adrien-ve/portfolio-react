import "./AnimatedText.css";
import { useState } from "react";
import splitStringUsingRegex from "../utils/splitTextUsingRegex";

export default function AnimatedText({ text }) {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const getTransformStyles = (isMouseEntered, index) => ({
    transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
    transitionDelay: `${index * 0.02}s`,
  });

  return (
    <span
      aria-label={text}
      className="AnimatedText"
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
    >
      <span className="AnimatedText-container">
        {splitStringUsingRegex(text).map((character, index) => (
          <span className="AnimatedText-char" key={index}>
            <span style={getTransformStyles(isMouseEntered, index)}>
              {character}
            </span>
            <span style={getTransformStyles(isMouseEntered, index)}>
              {character}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
