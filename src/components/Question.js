import { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining((time) => {
        if (time === 1) {
          onAnswered(false);
          return 10;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>

      <p>{timeRemaining} seconds remaining</p>

      {question.answers.map((answer) => (
        <button key={answer}>{answer}</button>
      ))}
    </div>
  );
}

export default Question;