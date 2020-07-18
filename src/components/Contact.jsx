import React from "react";
import BackButton from "./BackButton";

const Contact = ({}) => {
  const contacts = [
    "contact@farouche-editions.com",
    "ligne.editoriale@farouche-editions.com",
    "art@farouche-editions.com",
    "sons@farouche-editions.com",
    "unequestion@farouche-editions.com ",
  ];

  return (
    <div className="contact">
      <div className="title">Contact</div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li>
              <a href={`mailto:${contact}`}>{contact}</a>
            </li>
          );
        })}
      </ul>

      <div className="title">Adresse</div>
      <div>7, rue François Miron - 75004 Paris </div>
      <BackButton />
    </div>
  );
};

export default Contact;
