import { Button } from "@material-ui/core";
import React, { useState } from "react";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";

import Result from "../Result/Result";
import Home from "../../TrivialPursuit";

function Question({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
  setHomeSection,
  homeSection,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [resSection, setResSection] = useState(false);

  const handleNext = () => {
    if (currQues > 8) {
      setResSection(true);
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleQuit = () => {
    setHomeSection(true);
  };

  return homeSection ? (
    <Home />
  ) : (
    <div className="question">
      <h1>Question {currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>

        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>

      {resSection && <Result score={score} />}
    </div>
  );
}

export default Question;
