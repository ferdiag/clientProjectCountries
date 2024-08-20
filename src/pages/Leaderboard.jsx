import React from 'react';
import { useSelector } from 'react-redux';
import DisplayLeaderboard from '../components/DisplayLeaderboard';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

/**
 * Leaderboard-Komponente.
 *
 * Diese Komponente zeigt die Punktzahl und den Namen des aktuellen Spielers an,
 * zeigt die gesamte Bestenliste über die `DisplayLeaderboard`-Komponente an
 * und bietet einen Button, um zur Startseite zurückzukehren.
 *
 * @author Ferhat Agostinis
 */
const Leaderboard = () => {
    // Zugriff auf `points` und `name` aus dem Redux-Store
    const { points, name } = useSelector(state => state.game);
    const navigate = useNavigate();

    return (
        <div>
            <div>
                {/* Anzeige des Namens und der Punktzahl des aktuellen Spielers */}
                <div>{name}</div>
                <div>{points}</div>
            </div>
            {/* Anzeige der gesamten Bestenliste */}
            <DisplayLeaderboard />
            {/* Button zum Zurücknavigieren zur Startseite */}
            <Button onClick={() => navigate("/")}>
                zum Anfang
            </Button>
        </div>
    );
}

export default Leaderboard;
