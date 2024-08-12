import React, { useEffect, useState } from "react";

/**
 * Game component that handles the core gameplay logic.
 * @param {Array} countries - The array of country objects, each containing country and capital names.
 * @param {number} counter - The current index of the country in the array.
 * @param {Function} setCounter - Function to update the counter state.
 * @param {string} questionType - The current type of question ("country" or "capital").
 * @param {Function} setQuestionType - Function to update the question type state.
 * @param {Function} setPoints - Function to update the player's points.
 * @param {Function} setLives - Function to update the player's remaining lives.
 * @returns {JSX.Element} The game interface where users can interact with questions.
 */
const Game = ({
  countries,
  counter,
  setCounter,
  questionType,
  setQuestionType,
  setPoints,
  setLives,
}) => {
  const [currentCountry, setCurrentCountry] = useState(null);

  /**
   * useEffect hook that runs every time the `counter` or `setCurrentCountry` changes.
   * It selects the current country and randomly generates three incorrect options.
   * The correct answer is randomly inserted among these options.
   */
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
  }, [counter, setCurrentCountry, countries]);

  /**
   * Updates the question type and counter.
   * If the question type is "capital", it resets to "country" and increments the counter.
   */
  const setStates = () => {
    setQuestionType("country");
    setCounter((currentCounter) => {
      const updatedCounter = currentCounter + 1;
      return updatedCounter;
    });
  };

  /**
   * Handles the user's choice by checking if the selected option is correct.
   * If correct, it increments the points and updates the question type.
   * If incorrect, it decrements the lives.
   * @param {React.MouseEvent} e - The click event on the option button.
   */
  const handleUserChoice = (e) => {
    e.preventDefault();
    if (parseInt(e.target.name, 10) === counter) {
      setPoints((currentpoints) => currentpoints + 1);
      questionType === "country" ? setQuestionType("capital") : setStates();
      return;
    }
    setLives((currentLives) => currentLives - 1);
  };

  /**
   * Placeholder function to potentially display a flag in the future.
   */
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
        <div>...loading</div>
      )}
    </div>
  );
};

export default Game;
