import React, { useEffect, useState } from "react";
import useCurrentCountry from "../hooks/useShuffleCountry";
import OverHead from "./OverHead";
import Question from "./Question";
import Answers from "./Answers";
import { useSelector } from "react-redux";


const Game = () => {
  const { currentCountry } = useSelector(state => state.game)
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
