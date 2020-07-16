import React, { useState, useEffect } from "react";

const CountDown = ({ date }) => {
  const [timer, setTimer] = useState([
    { text: "jours", time: 0 },
    { text: "heures", time: 0 },
    { text: "minutes", time: 0 },
    { text: "secondes", time: 0 },
  ]);

  useEffect(() => {
    setInterval(() => getTimeUntil(date), 1000);
  }, [date]);

  const getTimeUntil = (date) => {
    const time = Date.parse(date) - Date.parse(new Date());
    if (time < 0) {
      setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setTimer([
        { text: "jours", time: days },
        { text: "heures", time: hours },
        { text: "minutes", time: minutes },
        { text: "secondes", time: seconds },
      ]);
    }
  };

  return (
    <div className="container">
      <div className="counter-container row">
        {timer.map((oneCounter) => {
          return (
            <div className="counter-column col-sm" key={oneCounter.text}>
              <div className="counter-timer"> {oneCounter.time} </div>{" "}
              <div> {oneCounter.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountDown;
