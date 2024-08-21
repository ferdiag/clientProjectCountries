import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Game from "./pages/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Dialog from "./components/Dialog";
import { shuffleArray } from "./utils/helpers/shuffleArray";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountries,
  setDisplayDialog,
  setLeaderBoard,
  setName,
} from "./context/slice";
/**
 * Shuffles an array in place.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} The shuffled array.
 */

/**
 * Main application component.
 * @returns {JSX.Element} The main component rendering the game.
 */
function App() {
  const dispatch = useDispatch();
  const { displayDialog } = useSelector((state) => state.game);

  useEffect(() => {
    const name = localStorage.getItem("name");
    console.log(name);
    name && dispatch(setName(name));
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        const { data, leaderboard } = response.data;
        const shuffledArray = shuffleArray(data);
        dispatch(setCountries(shuffledArray));
        dispatch(setLeaderBoard(leaderboard));
      })
      .catch((error) => alert("Fehler beim Abrufen der Daten:", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handles the start button click event.
   * @param {React.MouseEvent} e - The click event.
   */
  const handleCloseDialog = () => {
    setDisplayDialog(false);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
        {displayDialog && <Dialog onClose={handleCloseDialog} />}
      </Router>
    </div>
  );
}

export default App;
