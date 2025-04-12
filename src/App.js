import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PageInside from "./components/pageInside/PageInside";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/year/:year" element={<PageInside />} />
      </Routes>
    </div>
  );
}

export default App;
