import React from 'react';
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCountry, setDisplayDialog, setLifes, setPoints } from '../context/slice';

/**
 * Home-Komponente.
 *
 * Diese Komponente begrüßt den Spieler, zeigt seinen Namen an und bietet zwei Buttons:
 * einen, um das Spiel zu starten, und einen anderen, um den Namen des Spielers zu ändern.
 *
 * @author Ferhat Agostinis
 */
const Home = () => {
    // Zugriff auf den Namen des Spielers aus dem Redux-Store
    const { name } = useSelector((state) => state.game);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Funktion zum Starten des Spiels, navigiert zur Spielseite
    const handleStart = (e) => {
        e.preventDefault();
        dispatch(setPoints(0))
        dispatch(setLifes(3))
        navigate("/game");
    };

    return (
        <div>
            <h1>
                Hallo {name}
            </h1>
            <div>
                {/* Button zum Starten des Spiels */}
                <Button onClick={(e) => handleStart(e)}>Start</Button>
                {/* Button zum Anzeigen des Dialogs zum Ändern des Namens */}
                <Button onClick={e => dispatch(setDisplayDialog(true))}>Namen Ändern</Button>
                <Button onClick={e => navigate("/Leaderboard")}>Zur Bestenliste</Button>
            </div>
        </div >
    );
}

export default Home;
