import React from "react";
import { useSelector } from "react-redux";

const LivesElement = () => {
  const { lives } = useSelector(state => state.game)
  return <div>Leben:{lives}</div>;
};

export default LivesElement;
