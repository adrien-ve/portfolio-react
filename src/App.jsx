import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { useMouseMove, useValue, animate } from "react-ui-animate";

function App() {
  const x = useValue(0);
  const y = useValue(0);

  useMouseMove(({ mouseX, mouseY }) => {
    y.value = mouseY - 35;
    x.value = mouseX - 35;
  });

  return (
    <div
      className="flex flex-col h-full"
      style={{ cursor: "none", overflow: "hidden" }}
    >
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
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
