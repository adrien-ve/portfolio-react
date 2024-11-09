import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import BurgerButton from "./BurgerButton";
import "./MobileNavigation.css";
import { useClickAway } from "react-use";

export default function MobileNavigation() {
  const [isOpen, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const mobileMenuRef = useRef(null);

  useClickAway(mobileMenuRef, () => {
    if (isOpen) toggleMenu();
  });

  const toggleMenu = () => {
    if (isOpen) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 700);
    } else {
      setOpen(true);
    }
  };

  const handleAnimationEnd = () => {
    if (closing) {
      setOpen(false);
      setClosing(false);
    }
  };

  const menu = (
    <div
      className={`menu-overlay flex flex-col items-center text-center justify-center ${
        closing ? "closing" : "opening"
      }`}
      onAnimationEnd={handleAnimationEnd}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="menu-entries" ref={mobileMenuRef}>
        <div className="mobile-button">About</div>
        <div className="mobile-button">Experience</div>
        <div className="mobile-button">My work</div>
        <div className="mobile-button">Contact</div>
      </div>
    </div>
  );

  return (
    <div className="menuButtonWrapper" onClick={toggleMenu}>
      <BurgerButton />
      {isOpen && createPortal(menu, document.body)}
    </div>
  );
}
