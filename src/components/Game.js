import React, { useEffect, useState } from "react";
import Button from "./StartButton";

const Game = ({
  countries,
  counter,
  setCounter,
  questionType,
  setQuestionType,
  setPoints,
}) => {
  const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(() => {
    const country = { ...countries[counter] };
    let it = 0;
    let opps = [];
    while (it < 3) {
      const randomNumber = Math.floor(Math.random() * countries.length);
      const isInOpps = opps.includes(randomNumber);
      if (!isInOpps) {
        opps = [...opps, randomNumber];
        it += 1;
      }
    }
    const indexOfCorrectAnswer = Math.floor(Math.random() * 4);
    opps.splice(indexOfCorrectAnswer, 0, counter);
    setCurrentCountry({ ...country, opps });
  }, [counter]);

  const setStates = () => {
    setQuestionType("country");
    setCounter((currentCounter) => {
      const updatedCounter = currentCounter + 1;
      return updatedCounter;
    });
  };

  const handleUserChoice = (e) => {
    e.preventDefault();
    if (parseInt(e.target.name, 10) === counter) {
      setPoints((currentpoints) => currentpoints + 1);
      questionType === "country" ? setQuestionType("capital") : setStates();
    }
  };
  const displayFlag = () => {};
  return (
    <div>
      {currentCountry ? (
        <>
          <div>
            {questionType === "country"
              ? currentCountry.country
              : currentCountry.capital}
          </div>
          <div>
            {currentCountry.opps.map((indexOfCountry, index) => (
              <button
                name={indexOfCountry}
                key={index}
                onClick={(e) => handleUserChoice(e)}
              >
                {questionType === "country"
                  ? countries[indexOfCountry].country
                  : countries[indexOfCountry].capital}
              </button>
            ))}
          </div>
        </>
      ) : (
        "...loading"
      )}
    </div>
  );
};

export default Game;
