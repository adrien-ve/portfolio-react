import { useEffect } from "react";
import About from "./About";
import Experience from "./Experience";
import MyWork from "./MyWork";
import Contact from "./Contact";

export default function MainPage({ activePage }) {
  return (
    <main className="h-full">
      {activePage === "About" ? <About /> : null}
      {activePage === "Experience" ? <Experience /> : null}
      {activePage === "My work" ? <MyWork /> : null}
      {activePage === "Contact" ? <Contact /> : null}
    </main>
  );
}
