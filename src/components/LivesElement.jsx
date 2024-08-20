import React from "react";
import { useSelector } from "react-redux";

const LivesElement = () => {
  const { lifes } = useSelector(state => state.game)

  return <div>Leben:{lifes}</div>;
};

export default LivesElement;
