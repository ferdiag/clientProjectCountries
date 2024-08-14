import React, { useState } from "react";
import useCurrentCountry from "../hooks/useShuffleCountry";
import OverHead from "./OverHead";
import Question from "./Question";
import Answers from "./Answers";
import { useSelector } from "react-redux";


const Game = () => {
  const { currentCountry, countries, counter } = useSelector(state => state.game)
  useCurrentCountry();
  return (
    <div>
      {currentCountry ? (
        <>
          <OverHead />
          <div>
            {" "}
            <Question />
            <Answers />
          </div>
        </>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};

export default Game;
