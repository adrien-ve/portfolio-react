import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { useMouseMove, useValue, animate } from "react-ui-animate";
import { useState } from "react";

function App() {
  // Active page
  const [activePage, setActivePage] = useState("About");

  return (
    // Container for the entire app
    <div className="flex flex-col h-full">
      {/* Header and main page where the sub pages are getting stored */}
      <Header setActivePage={setActivePage} />
      <MainPage activePage={activePage} />
    </div>
  );
}

export default App;
