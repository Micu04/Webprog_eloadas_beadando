import { useState } from "react";
import emojiQuestions from "../data/emojiQuestions";
import EmojiQuestion from "../components/EmojiQuestion";
import AnswerInput from "../components/AnswerInput";
import Result from "../components/Result";
import "../styles/Emojenius.css";

export default function Emojenius() {
  const [index, setIndex] = useState(0);           // Melyik kérdésnél járunk
  const [userAnswer, setUserAnswer] = useState(""); // Amit a felhasználó beírt
  const [isCorrect, setIsCorrect] = useState(null); // true / false / null

  const current = emojiQuestions[index]; // Az aktuális kérdés

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
    <div className="quiz-container">
      <h1>🎭 Emojenius</h1>
  
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
  
      <AnswerInput
        className="answer-input"
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        checkAnswer={checkAnswer}
      />
  
      <div className="result-message">
        <Result isCorrect={isCorrect} />
      </div>
  
      {isCorrect !== null && (
        <button className="submit-btn" onClick={nextQuestion}>
          🎯 Következő
        </button>
      )}
    </div>

  );
  
}