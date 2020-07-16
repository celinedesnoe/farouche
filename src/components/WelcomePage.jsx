import React from "react";
import CountDown from "./CountDown";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="logo-farouche">
        <img src="/logo.jpg" className="logo-farouche"></img>
      </div>
      <CountDown date={"January, 1, 2021"} />
    </div>
  );
};

export default WelcomePage;
