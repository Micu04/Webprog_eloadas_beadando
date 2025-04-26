import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container fade-in">
      <h1 className="home-title">Válassz egy játékot!</h1>
      <div className="home-menu">
        <Link to="/Emojenius">
          <img src="./Emojen.png" alt="Emojenius" className="menu-image" />
        </Link>
        <Link to="/Hangmaniac">
          <img src="./Hangman.png" alt="Hangmaniac" className="menu-image" />
        </Link>
      </div>
    </div>
  );
}
