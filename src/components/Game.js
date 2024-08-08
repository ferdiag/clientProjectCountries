import React from "react";

const Game = ({
  countries,
  counter,
  setCounter,
  questionType,
  setQuestionType,
  setPoints,
}) => {
  const setStates = () => {
    setQuestionType("country");
    setCounter((currentCounter) => currentCounter + 1);
  };

  const handleSubmit = () => {
    setPoints((currentpoints) => currentpoints + 1);
    questionType === "country" ? setQuestionType("capital") : setStates();
  };
  return (
    <div>
      <div>
        {questionType === "country"
          ? countries[counter].country
          : countries[counter].capital}
      </div>
      <input />
      <button onClick={handleSubmit}>abschicken</button>
    </div>
  );
};

export default Game;
