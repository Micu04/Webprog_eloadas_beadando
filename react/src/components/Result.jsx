export default function Result({ isCorrect }) {
  if (isCorrect === null) return null;

  return (
    <p style={{ color: isCorrect ? "green" : "red" }}>
      {isCorrect ? "✅ Helyes!" : "❌ Próbáld újra!"}
    </p>
  );
}
