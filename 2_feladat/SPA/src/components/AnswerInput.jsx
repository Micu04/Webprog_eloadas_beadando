export default function AnswerInput({ userAnswer, setUserAnswer, checkAnswer, className }) {
  return (
    <div>
      <input
        type="text"
        className={className}
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Írd be a megfejtést..."
        onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
      />
      <button className="submit-btn" onClick={checkAnswer}>Beküldés</button>
    </div>
  );
}