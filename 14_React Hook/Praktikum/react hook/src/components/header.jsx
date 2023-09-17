import React from "react";
import logoBootstrap from "../assets/images/bootstrap-logo.png";

const Header = ({ title, description, language, onLanguageChange }) => {
  return (
    <div className="col-md-12 mx-auto text-center mt-5">
      <img src={logoBootstrap} alt="Logo Bootstrap" className="mt-3 mb-3" />
      <h3>{title[language]}</h3>
      <p className="col-md-6 mx-auto">{description[language]}</p>
      <button className="btn btn-primary ml-2" onClick={onLanguageChange}>
        Change Language
      </button>
    </div>
  );
};

export default Header;