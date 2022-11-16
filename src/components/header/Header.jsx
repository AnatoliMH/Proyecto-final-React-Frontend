import React from "react";
import "./Header.css";
import logoReact from "../../assets/images/react.png";

const Header = ({ title, description }) => {
  return (
    <header className="head">
      <img alt="logoReact" id="logoReact" src={logoReact}></img>
      <div className="contTitle">
        <h1 className="title">{title}</h1>
        <h2 className="description">{description}</h2>
      </div>
    </header>
  );
};

export default Header;
