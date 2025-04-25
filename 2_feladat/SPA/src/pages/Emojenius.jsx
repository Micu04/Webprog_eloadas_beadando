import { useState } from "react";
import { Link } from "react-router-dom"; // <<< FONTOS IMPORT!
import emojiQuestions from "../data/emojiQuestions";
import EmojiQuestion from "../components/EmojiQuestion";
import AnswerInput from "../components/AnswerInput";
import Result from "../components/Result";
import "../styles/Emojenius.css";

export default function Emojenius() {
  const [index, setIndex] = useState(0);            // Aktuális kérdés indexe
  const [userAnswer, setUserAnswer] = useState("");  // Felhasználó válasza
  const [isCorrect, setIsCorrect] = useState(null);  // Válasz helyessége

  const current = emojiQuestions[index];             // Aktuális kérdés

  const checkAnswer = () => {
    const normalized = userAnswer.trim().toLowerCase();
    const correct = current.answers.some((a) => normalized === a);
    setIsCorrect(correct);
  };

  const nextQuestion = () => {
    setUserAnswer("");
    setIsCorrect(null);
    setIndex((prev) => (prev + 1) % emojiQuestions.length);
  };

  return (
    <>
      {/* Kvíz konténer */}
      <div className="quiz-container">
      <img src="/Emojen.png" alt="HangManiac" className="game-logo" />

        {/* Emoji kérdés */}
        <div
          className={`emoji-display ${
            isCorrect === true
              ? 'emoji-correct'
              : isCorrect === false
              ? 'emoji-wrong'
              : ''
          }`}
        >
          <EmojiQuestion emojis={current.emojis} />
        </div>

        {/* Válasz input */}
        <AnswerInput
          className="answer-input"
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          checkAnswer={checkAnswer}
        />

        {/* Helyes / Helytelen üzenet */}
        <div className="result-message">
          <Result isCorrect={isCorrect} />
        </div>

        {/* Következő kérdés gomb */}
        {isCorrect !== null && (
          <button className="submit-btn" onClick={nextQuestion}>
            🎯 Következő
          </button>
        )}
      </div>

      {/* Vissza a főoldalra gomb */}
      <div className="back-home-wrapper">
        <Link to="/" className="back-home-btn">🏠 Vissza a főoldalra</Link>
      </div>
    </>
  );
}
