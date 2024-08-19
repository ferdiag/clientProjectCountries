import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDisplayDialog,
  setName
} from '../context/slice';
import axios from "axios";

const Dialog = ({ onClose }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { name } = useSelector(state => state.game)

  const handleSave = (e) => {
    dispatch(setDisplayDialog(false));
    localStorage.setItem("name", name);
    navigate("/Leaderboard")
  };

  const handleChange = (e) => {
    dispatch(setName(e.target.value))
  };

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
          value={name}
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
