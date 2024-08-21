import React from 'react';
import { useSelector } from 'react-redux';

/**
 * DisplayLeaderboard-Komponente.
 *
 * Diese Komponente zeigt die Bestenliste an, indem sie die `leaderboard`-Daten
 * aus dem Redux-Store abruft. Wenn die Bestenliste verfügbar ist, wird sie
 * durch eine Liste von Spielern und ihren Punktzahlen dargestellt. Falls keine
 * Einträge vorhanden sind, wird eine entsprechende Nachricht angezeigt.
 *
 * @author Ferhat Agostinis
 */
const DisplayLeaderboard = () => {
    // Zugriff auf die `leaderboard`-Daten aus dem Redux-Store
    const { leaderboard } = useSelector(state => state.game);

    return (
        <div>
            {leaderboard
                ? leaderboard.map((player, index) => (
                    <div key={index}>
                        <div>{player.name}</div>
                        <div>{player.points}</div>
                    </div>
                ))
                : <div>Leider sind keine Einträge verfügbar</div> // Nachricht, wenn keine Einträge vorhanden sind
            }
        </div>
    );
};

export default DisplayLeaderboard;
