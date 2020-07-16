import React, { useState, useEffect } from "react";

const CountDown = ({ date }) => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => getTimeUntil(date), 1000);
  }, []);

  const getTimeUntil = (date) => {
    const time = Date.parse(date) - Date.parse(new Date());
    if (time < 0) {
      setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setTimer({ days, hours, minutes, seconds });
    }
  };

  return <div>Farouche {timer.seconds}</div>;
};

export default CountDown;
