import React from "react";
import "./footer.scss";

import github from "../../assets/github.copy.svg";
import facebook from "../../assets/facebook.copy.svg";
import linkedIn from "../../assets/linkedin.copy.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-links">
        <div>
          <a href="https://github.com/mikebeaudry93">
            <img src={github} alt="github" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/mikebeaudry93/">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/michael-beaudry/">
            <img src={linkedIn} alt="linkedIn" />
          </a>
        </div>
      </div>
      <p>© 2020 Michael Beaudry</p>
    </section>
  );
};

export default Footer;
