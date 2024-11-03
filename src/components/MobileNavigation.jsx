import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import BurgerButton from "./BurgerButton";
import "./MobileNavigation.css";
import { createPortal } from "react-dom";

export default function MobileNavigation() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  useClickAway(ref, () => {
    if (isOpen) toggleOpen();
  });

  return (
    <div ref={ref} className="menuButtonWrapper" onClick={toggleOpen}>
      <BurgerButton />
      {isOpen &&
        createPortal(
          <div className="menu-overlay">Le menu version mobile</div>,
          document.body
        )}
    </div>
  );
}
