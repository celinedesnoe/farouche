import React from "react";
import BackButton from "./BackButton";
const Definition = ({}) => {
  return (
    <div className="definition">
      <div className="title">Définition</div>
      <div className="">
        <b>farouche</b> <i>adjectif</i> (masculin et féminin identiques)
        <div>\fa.ʁuʃ\</div>
        <div>
          Du latin forasticus (« étranger »), de là «sauvage, indomptable ».
          (Par extension) ombrageux, intraitable, en parlant des personnes. (En
          particulier) Se dit d’une femme qui refuse qu’on lui fasse la cour.
        </div>
      </div>
      <BackButton />
    </div>
  );
};

export default Definition;
