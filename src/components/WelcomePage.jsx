import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import CountDown from "./CountDown";

const WelcomePage = () => {
  const socialNetworks = [
    { type: "facebook", link: "" },
    { type: "instagram", link: "" },
    { type: "twitter", link: "" },
  ];

  return (
    <div className="welcome-page container">
      <div className="logo-name">
        <div>FarOuche</div>
        <div>éditiOns</div>
      </div>
      <div className="navigation row">
        <Link to="/en-savoir-plus">
          <div className="col-4-sm navigation-page ">En savoir plus</div>
        </Link>
        <Link to="/qui-sommes-nous">
          <div className="col-4-sm navigation-page ">Qui sommes-nous</div>
        </Link>
        <Link to="/contact">
          <div className="col-4-sm navigation-page ">Contact</div>
        </Link>
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
