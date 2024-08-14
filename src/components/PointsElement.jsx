import React from "react";
import { useSelector } from "react-redux";

const PointsElement = () => {
  const { points } = useSelector(state => state.game)
  return <div>Punkte:{points}</div>;
};

export default PointsElement;
