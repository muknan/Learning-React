function Options({ question, dispatch, answer }) {
  const isAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            isAnswered && (i === question.correctOption ? "correct" : "wrong")
          }`}
          key={option}
          disabled={isAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
