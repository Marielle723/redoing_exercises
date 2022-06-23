import "./TrivialPursuit.css";
import { useState } from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// PAGES
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Components/Result/Result";

//IMAGE

import axios from "axios";

//CREDIT
//https://www.youtube.com/watch?v=dg7XmuLvsbs

function TrivialPursuit() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <>
      <Header />
      <Home
        name={name}
        setName={setName}
        fetchQuestions={fetchQuestions}
        questions={questions}
        score={score}
        setScore={setScore}
      />

      <Footer />
    </>
  );
}

export default TrivialPursuit;
