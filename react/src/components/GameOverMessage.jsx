export default function GameOverMessage({ wrongGuesses, maxWrong, resetGame }) {
    return (
      <div className="gameover">
        <h2>{wrongGuesses > maxWrong ? "Vesztettél!" : "Győztél!"}</h2>
        <button onClick={resetGame}>Újra játszom</button>
      </div>
    );
  }