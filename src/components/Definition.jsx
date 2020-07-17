import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Definition = ({}) => {
  return (
    <div className="definition">
      <div classNAme="text-center">
        <b>farouche</b> <i>adjectif</i> (masculin et féminin identiques)
        <div>\fa.ʁuʃ\</div>
        <div>
          Du latin forasticus (« étranger »), de là «sauvage, indomptable ».
          (Par extension) ombrageux, intraitable, en parlant des personnes. (En
          particulier) Se dit d’une femme qui refuse qu’on lui fasse la cour.
        </div>
      </div>
      <Link to="/">
        <div>Retour</div>
      </Link>
    </div>
  );
};

export default Definition;
