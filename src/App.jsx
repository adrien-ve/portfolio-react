import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
