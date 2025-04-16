export default function AnswerInput({ userAnswer, setUserAnswer, checkAnswer, className }) {
  return (
    <div>
      <input
        type="text"
        className={className}
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Guess the phrase..."
        onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
      />
      <button className="submit-btn" onClick={checkAnswer}>Submit</button>
    </div>
  );
}
