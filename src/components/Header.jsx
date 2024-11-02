import { useEffect } from "react";
import { useRef } from "react";
import BurgerButton from "./BurgerButton";
import "./Header.css";

export default function Header() {
  // Reference vers le menu du header
  const menuRef = useRef();

  // Ajouter un chiffre avant chaque élément du menu
  useEffect(() => {
    const menuEntries = [...menuRef.current.children];
    menuEntries.forEach((element, index = 0) => {
      // Si c'est le menu mobile, on ne fait pas le reste
      if (index > menuEntries.length - 2) {
        return;
      }
      // Sinon on met un chiffres devant les éléments du menu
      const number = document.createElement("span");
      number.className = "green";
      number.textContent = `0${index + 1}. `;
      element.children.item(0).prepend(number);
    });

    return () => {
      menuEntries = null;
      menuRef = null;
    };
  }, []);

  return (
    <header className="flex flex-row justify-between text-nowrap animated animatedFadeInUp fadeInUp">
      {/* DIV pour la partie de gauche */}
      <div className="flex items-center">
        {/* Image pour la navbar */}
        <img
          src="./src/assets/logo.png"
          width={50}
          height={50}
          alt="Website logo"
        />
      </div>
      {/* DIV pour la partie de droite */}
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
        <div>
          <BurgerButton />
        </div>
      </div>
    </header>
  );
}
