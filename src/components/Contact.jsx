import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = ({}) => {
  const contacts = [
    "contact@farouche-editions.com",
    "ligne.editoriale@farouche-editions.com",
    "art@farouche-editions.com",
    "sons@farouche-editions.com",
    "unequestion@farouche-editions.com ",
  ];

  return (
    <div className="">
      <Link to="/">
        <ul>
          {contacts.map((contact) => {
            return <li>{contact}</li>;
          })}
        </ul>

        <div>
          <div>Adresse</div>
          <div>7, rue François Miron - 75004 Paris </div>
        </div>
        <div>Retour</div>
      </Link>
    </div>
  );
};

export default Contact;
