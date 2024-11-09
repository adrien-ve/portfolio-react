import { useEffect, useState } from "react";
import { useRef } from "react";
import MobileNavigation from "./MobileNavigation";
import "./Header.css";

export default function Header() {
  const menuRef = useRef();

  useEffect(() => {
    const menuEntries = [...menuRef.current.children];
    menuEntries.forEach((element, index = 0) => {
      if (index > menuEntries.length - 2) {
        return;
      }
      const number = document.createElement("span");
      number.className = "green";
      number.textContent = `0${index + 1}. `;
      element.children.item(0).prepend(number);
    });
  }, []);

  return (
    <header className="flex flex-row justify-between text-nowrap animated animatedFadeInUp fadeInUp">
      <div className="flex items-center">
        <img
          src="./src/assets/logo.png"
          width={50}
          height={50}
          alt="Website logo"
        />
      </div>
      <div className="flex flex-column items-center gap-x-8" ref={menuRef}>
        <div className="enableSmallMenu">
          <a href="#">About</a>
        </div>
        <div className="enableSmallMenu">
          <a href="#">Experience</a>
        </div>
        <div className="enableSmallMenu">
          <a href="#">My work</a>
        </div>
        <div className="enableSmallMenu">
          <a href="#">Contact</a>
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
}
