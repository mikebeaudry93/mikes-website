import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="navbar">
      <h3>
        michael <span>beaudry</span>
      </h3>
      <div>
        <button className="btn-primary">let's get in touch!</button>
      </div>
    </header>
  );
};

export default Header;
