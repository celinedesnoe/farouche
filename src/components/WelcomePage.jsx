import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import CountDown from "./CountDown";

const WelcomePage = () => {
  const socialNetworks = [
    {
      type: "facebook",
      link:
        "https://m.facebook.com/Farouche-Éditions-100211638446972?__nodl&refsrc=https%3A%2F%2Fm.facebook.com%2Ffbrdr%2F274%2F100211638446972%2F&_rdr",
    },
    { type: "instagram", link: "https://www.instagram.com/farouche.editions/" },
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
            <a
              className="one-network"
              href={oneNetwork.link}
              key={oneNetwork.type}
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", oneNetwork.type]} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default WelcomePage;
