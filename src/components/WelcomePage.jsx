import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CountDown from "./CountDown";

const WelcomePage = () => {
  const socialNetworks = [
    { type: "facebook", link: "" },
    { type: "instagram", link: "" },
  ];

  return (
    <div className="welcome-page">
      <div className="logo-farouche">
        <img
          src="/logo.jpg"
          className="logo-farouche"
          alt="logo=farouche"
        ></img>
      </div>
      <CountDown date={"January, 1, 2021"} />
      <div className="list-networks">
        {socialNetworks.map((oneNetwork) => {
          return (
            <div
              className="one-network"
              href={oneNetwork.link}
              key={oneNetwork.type}
            >
              <FontAwesomeIcon icon={["fab", oneNetwork.type]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WelcomePage;
