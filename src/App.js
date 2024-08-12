import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import StartButton from "./components/StartButton";
import Game from "./components/Game";
import PointsElement from "./components/PointsElement";

const shuffleArray = (array) => {
  const updatedArray = [...array];
  for (let i = updatedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [updatedArray[i], updatedArray[j]] = [updatedArray[j], updatedArray[i]];
  }
  return updatedArray;
};
function App() {
  const [countries, setCountries] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [questionType, setQuestionType] = useState("country");
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        const shuffledArray = shuffleArray(response.data);
        setCountries(shuffledArray);
      })
      .catch((error) => console.error("Fehler beim Abrufen der Daten:", error));
  }, []);
  const handleStart = (e) => {
    e.preventDefault();
    setIsRunning(true);
  };
  return (
    <div className="App">
      {!isRunning ? (
        <StartButton onClick={(e) => handleStart(e)}>Start</StartButton>
      ) : (
        <>
          <PointsElement points={points} />
          <Game
            setCounter={setCounter}
            setQuestionType={setQuestionType}
            questionType={questionType}
            counter={counter}
            countries={countries}
            points={points}
            setPoints={setPoints}
          />
        </>
      )}
    </div>
  );
}

export default App;
