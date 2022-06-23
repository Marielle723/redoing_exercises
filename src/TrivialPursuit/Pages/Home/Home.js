import { MenuItem, TextField, Button } from "@material-ui/core";
import react, { useState } from "react";

import "./Home.css";

import imageQuiz from "../../assets/img/imagequizz.svg";
import Categories from "../../Data/Categories";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import Quiz from "../Quiz/Quiz";

function Home({
  name,
  setName,
  fetchQuestions,
  questions,
  setQuestions,
  score,
  setScore,
}) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const [quizSection, setQuizSection] = useState(false);
  const [homeSection, setHomeSection] = useState(false);

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      setQuizSection(true);
    }
  };

  return quizSection ? (
    <Quiz
      name={name}
      score={score}
      questions={questions}
      setQuestions={setQuestions}
      setScore={setScore}
      setHomeSection={setHomeSection}
      homeSection={homeSection}
    />
  ) : (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 26 }}>Quiz Settings</span>

        <div className="settings-select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((cat) => {
              return (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.category}
                </MenuItem>
              );
            })}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img
        src={imageQuiz}
        className="banner"
        alt="schoolboard with word bonjour written with a chalt and a female teacher pointer the schoolboard"
      />
    </div>
  );
}

export default Home;
