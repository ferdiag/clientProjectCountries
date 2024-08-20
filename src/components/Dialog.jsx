import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDisplayDialog,
  setLeaderBoard,
  setName
} from '../context/slice';
import axios from "axios";

/**
 * Dialog-Komponente.
 *
 * Diese Komponente zeigt ein Dialogfeld an, in dem der Benutzer seinen Namen eingeben kann.
 * Der eingegebene Name wird gespeichert, und die Bestenliste wird aktualisiert.
 * Die Komponente kann durch Klicken außerhalb des Dialogs geschlossen werden.
 *
 * @param {Object} props - Die an die Komponente übergebenen Eigenschaften.
 * @param {Function} props.onClose - Funktion, die aufgerufen wird, um den Dialog zu schließen.
 *
 * @author Ferhat Agostinis
 */
const Dialog = ({ onClose }) => {
  const dispatch = useDispatch();
  const { name, points } = useSelector(state => state.game);
  const [newName, setNewName] = useState(name);

  // Speichert den neuen Namen und aktualisiert die Bestenliste
  const handleSave = async (e) => {
    e.preventDefault();

    // Neuen Namen im lokalen Speicher speichern
    localStorage.setItem("name", newName);
    dispatch(setName(newName));

    // Bestenliste mit dem neuen Namen und den Punkten aktualisieren
    const res = await axios.post("http://localhost:3001/getAndUpdateLeaderboard", { name: newName, points });
    dispatch(setLeaderBoard(res.data.leaderboard));

    // Dialog schließen
    dispatch(setDisplayDialog(false));
  };

  // Aktualisiert den Zustand für den neuen Namen
  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  // Schließt den Dialog, wenn außerhalb des Dialogfelds geklickt wird
  const handleCloseDialog = (e) => {
    if (e.target.id === "dialog-background") {
      onClose();
    }
  };

  return (
    <div
      id="dialog-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={(e) => handleCloseDialog(e)}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          width: "300px",
        }}
      >
        <label>Bitte gib deinen Namen ein</label>
        <input
          onChange={handleChange}
          value={newName}
          type="text"
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Speichern
        </button>
      </div>
    </div>
  );
};

export default Dialog;
