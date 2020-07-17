import React, { useState, useEffect } from "react";
import { history } from "../_helpers/history";

const Description = ({}) => {
  return (
    <div className="">
      Description
      <div onClick={() => history.push("/")}>Retour</div>
    </div>
  );
};

export default Description;
