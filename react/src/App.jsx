import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Emojenius from "./pages/Emojenius.jsx";
import Hangmaniac from "./pages/Hangmaniac.jsx";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Emojenius" element={<Emojenius />} />
        <Route path="/Hangmaniac" element={<Hangmaniac />} />
      </Routes>
    </div>
  );
}

export default App;