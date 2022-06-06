import React from "react";
import kegImage from "./../img/keg.png";

function Header() {
  return (
    <React.Fragment>
    <h1>Tap Site</h1>
    <img src={kegImage} alt="A keg" />
    </React.Fragment>
  );
}

export default Header;