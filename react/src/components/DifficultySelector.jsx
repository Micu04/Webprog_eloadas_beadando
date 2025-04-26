export default function DifficultySelector({ startGame }) {
  return (
    <div className="difficulty-selector">
      <button onClick={() => startGame("easy")}>Könnyű</button>
      <button onClick={() => startGame("medium")}>Közepes</button>
      <button onClick={() => startGame("hard")}>Nehéz</button>
    </div>
  );
}
