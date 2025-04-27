const magyarABC = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";

export default function Keyboard({ guessedLetters, lastGuess, word, guessLetter }) {
  return (
    <div className="keyboard">
      {magyarABC.split("").map((letter) => (
        <button
          key={`${letter}-${guessedLetters.length}`}
          onClick={() => guessLetter(letter)}
          disabled={guessedLetters.includes(letter)}
          className={
            lastGuess === letter
              ? word.includes(letter)
                ? "correct"
                : "wrong"
              : ""
          }
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
