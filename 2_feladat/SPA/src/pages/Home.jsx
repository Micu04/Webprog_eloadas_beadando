import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <h1>Arcade Lobby</h1>
      <div className="menu">
      <Link to="/Emojenius" className="menupont">Emojenius</Link>
      <Link to="/Hangmaniac" className="menupont">Hangmaniac</Link>
      </div>
    </div>
    
  );
}

export default Home;