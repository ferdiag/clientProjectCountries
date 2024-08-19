import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Question from "../components/Question";
import Answers from "../components/Answers";
import { useSelector } from "react-redux";
import { getLocalCountry } from "../utils/helpers/getLocalCountry";

const Game = () => {
  const [key, setKey] = useState(0); // re-render component

  const { counter, points, lives, country, questionType, countries } = useSelector(state => state.game)
  const [currentCountry, setCurrentCountry] = useState(null)
  useEffect(() => {
    const currentCountry = getLocalCountry(countries, counter, country)
    setCurrentCountry(currentCountry)
  }, [countries, counter])

  return (
    <div>
      {currentCountry ? (
        <>
          <Head
            questionType={questionType}
            currentCountry={currentCountry}
            points={points}
            lives={lives}
          />
          <div>
            {" "}
            <Question />
            <Answers
              points={points}
              setKey={setKey}
              index={counter}
              questionType={questionType}
              lives={lives}
              currentCountry={currentCountry}
              setCurrentCountry={setCurrentCountry} />
          </div>
        </>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};

export default Game;
