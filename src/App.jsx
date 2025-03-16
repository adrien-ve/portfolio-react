import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { useMouseMove, useValue, animate } from "react-ui-animate";
import { useState } from "react";

function App() {
  // Mouse position
  const x = useValue(0);
  const y = useValue(0);

  // Active page
  const [activePage, setActivePage] = useState("About");

  // Update x and y values on mouse move
  useMouseMove(({ mouseX, mouseY }) => {
    y.value = mouseY - 35;
    x.value = mouseX - 35;
  });

  return (
    // Container for the entire app, hiding the default cursor
    <div
      className="flex flex-col h-full"
      style={{ cursor: "none", overflow: "hidden" }}
    >
      {/* Visual representation of the edited cursor */}
      <animate.div
        style={{
          width: 20,
          height: 20,
          backgroundColor: "grey",
          borderRadius: "50%",
          translateX: x.value,
          translateY: y.value,
        }}
      />
      {/* Header and main page where the sub pages are getting stored */}
      <Header setActivePage={setActivePage} />
      <MainPage activePage={activePage} />
    </div>
  );
}

export default App;
