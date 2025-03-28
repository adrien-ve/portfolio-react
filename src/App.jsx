import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Scrollbar from "./components/Scrollbar";

function App() {
  // Active page
  const [activePage, setActivePage] = useState("About");

  return (
    // Container for the entire app
    <div className="flex flex-col h-full">
      {/* Header and main page where the sub pages are getting stored */}
      <Header setActivePage={setActivePage} />
      <MainPage activePage={activePage} />
      <Scrollbar />
    </div>
  );
}

export default App;
