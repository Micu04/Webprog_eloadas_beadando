import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Hangmaniac.css";
import asciiFigures from "../data/asciiFigures";
import hangmanWords from "../data/hangmanWords";
import DifficultySelector from "../components/DifficultySelector";
import AsciiFigure from "../components/AsciiFigure";
import WordDisplay from "../components/WordDisplay";
import Keyboard from "../components/Keyboard";
import GameOverMessage from "../components/GameOverMessage";

export default function Hangmaniac() {
  const [difficulty, setDifficulty] = useState("");
  const [currentWord, setCurrentWord] = useState(null);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [lastGuess, setLastGuess] = useState(null);

  const maxWrong = 6;

  const startGame = (level) => {
    const randomWordObj = hangmanWords[level][Math.floor(Math.random() * hangmanWords[level].length)];
    setDifficulty(level);
    setCurrentWord(randomWordObj);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setLastGuess(null);
  };

  const guessLetter = (letter) => {
    if (gameOver || guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);
    setLastGuess(letter);

    if (!currentWord.word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      if (newWrongGuesses > maxWrong) {
        setGameOver(true);
      }
    } else if (currentWord.word.split("").every((l) => guessedLetters.includes(l) || l === letter)) {
      setGameOver(true);
    }
  };

  const resetGame = () => setDifficulty("");

  return (
    <>
      <div className="hangmaniac-container">
        {/* --- Logó --- */}
        <img src="/Hangman.png" alt="HangManiac" className="game-logo" />

        {/* --- Tartalom --- */}
        {!difficulty ? (
          <DifficultySelector startGame={startGame} />
        ) : (
          <>
            <p><strong>Tipp:</strong> {currentWord.hint}</p>
            <AsciiFigure figure={asciiFigures[difficulty][wrongGuesses]} />
            <WordDisplay word={currentWord.word} guessedLetters={guessedLetters} />
            <Keyboard
              guessedLetters={guessedLetters}
              lastGuess={lastGuess}
              word={currentWord.word}
              guessLetter={guessLetter}
            />
            {gameOver && (
              <GameOverMessage
                wrongGuesses={wrongGuesses}
                maxWrong={maxWrong}
                resetGame={resetGame}
              />
            )}
          </>
        )}
      </div>

        <div className="back-home-wrapper"> 
      <Link to="/" className="back-home-btn">🏠 Vissza a főoldalra</Link>
      </div>
    </>
  );
}
