import React from "react";
import "./what-I-do-cards.scss";

function WhatIDoCards({ icon, title, text }) {
  return (
    <div className="content-card">
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default WhatIDoCards;
