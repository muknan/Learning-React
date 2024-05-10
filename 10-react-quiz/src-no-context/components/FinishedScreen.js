function FinishedScreen({ score, totalScore, highscore, dispatch }) {
  const scorePercentage = (score / totalScore) * 100;

  let grade;
  if (scorePercentage > 90) grade = "Excellent! 😄";
  if (scorePercentage > 80 && scorePercentage <= 90) grade = "Good Job! 😸";
  if (scorePercentage > 60 && scorePercentage <= 80) grade = "Nice! 😏";
  if (scorePercentage < 60) grade = "Try again! 🤦🏽‍♂️";
  return (
    <>
      <p className="result">
        You scored {score} points out of {totalScore} (
        {Math.ceil(scorePercentage)}%), {grade}
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
