import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import "./Result.css";
import Home from "../../Pages/Home/Home";

function Result({ name, score }) {
  useEffect(() => {
    if (!name) {
      <Home />;
    }
  }, [name]);

  return (
    <div className="result">
      <span className="title">Final score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go To Home
      </Button>
    </div>
  );
}

export default Result;
