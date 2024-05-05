function Progress({ index, numQuestions, score, totalScore, answer }) {
  return (
    <div>
      <header className="progress">
        <progress
          max={numQuestions}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Question <strong>{index + 1}</strong>/{numQuestions}
        </p>
        <p>
          <strong>{score}</strong>/{totalScore}
        </p>
      </header>
    </div>
  );
}

export default Progress;
