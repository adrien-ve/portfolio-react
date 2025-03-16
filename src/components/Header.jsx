import { useEffect } from "react";
import { useRef } from "react";
import MobileNavigation from "./MobileNavigation";
import "./Header.css";
import AnimatedText from "./AnimatedText";

export default function Header({ setActivePage }) {
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
    <header className="flex flex-row justify-between text-nowrap animated animatedFadeInUp fadeInUp w-full">
      <div className="flex items-center">
        <img
          src="./src/assets/logo.png"
          width={50}
          height={50}
          alt="Website logo"
        />
      </div>
      <div className="flex flex-column items-center gap-x-8" ref={menuRef}>
        <div
          className="enableSmallMenu cursor-pointer"
          onClick={() => setActivePage("About")}
        >
          <a className="flex flex-row items-center">
            <AnimatedText text="About" />
          </a>
        </div>
        <div
          className="enableSmallMenu cursor-pointer"
          onClick={() => setActivePage("Experience")}
        >
          <a className="flex flex-row items-center">
            <AnimatedText text="Experience" />
          </a>
        </div>
        <div
          className="enableSmallMenu cursor-pointer"
          onClick={() => setActivePage("My work")}
        >
          <a className="flex flex-row items-center">
            <AnimatedText text="My work" />
          </a>
        </div>
        <div
          className="enableSmallMenu cursor-pointer"
          onClick={() => setActivePage("Contact")}
        >
          <a className="flex flex-row items-center">
            <AnimatedText text="Contact" />
          </a>
        </div>
        <MobileNavigation setActivePage={setActivePage} />
      </div>
    </header>
  );
}
