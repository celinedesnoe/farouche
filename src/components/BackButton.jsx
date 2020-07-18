import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({}) => {
  return (
    <Link to="/" className="back-button">
      <div>Retour</div>
    </Link>
  );
};

export default BackButton;
