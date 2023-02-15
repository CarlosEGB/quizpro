import React, { useState, useEffect } from "react";
import Dos from "./Dos";

const ParentComponent = () => {

  const [minutesUp, setMinutesUp] = useState(0);
  const [secondsUp, setSecondsUp] = useState(0);
  const [minutesDown, setMinutesDown] = useState(60);
  const [secondsDown, setSecondsDown] = useState(0);
  const [count, setCount] = useState(0);
  console.log("repite")

  useEffect(() => {
    let intervalUp = setInterval(() => {
      if (secondsUp === 59) {
        setMinutesUp(minutesUp + 1);
        setSecondsUp(0);
      } else if (secondsUp === -1) {
        clearInterval(intervalUp)
      } else {
        setSecondsUp(secondsUp + 1);

      }
    }, 1000);
    return () => clearInterval(intervalUp);
  }, [minutesUp, secondsUp]);

  const updateCount = (num) => {
    setSecondsUp(num);
  };

  const finalizar = () => {
    setSecondsUp(-1);
  }

  return (
    <div>
      <Dos updateCount={updateCount} finalizar={finalizar} />
      <p>Count: {minutesUp + ":" + secondsUp}</p>
    </div>
  );
};

export default ParentComponent;