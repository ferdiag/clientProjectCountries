import React from "react";

const Dialog = ({ name, setName, onClose }) => {
  const handleSave = (e) => {
    // Speichern-Logik hier
  };

  const handleChange = (e) => {
    setName(e.target.value);
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
