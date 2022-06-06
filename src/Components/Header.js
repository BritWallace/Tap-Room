import React from "react";
import KegImage from "./../Img/keg.png";

function Header() {
  return (
    <React.Fragment>
    <h1>Tap Site</h1>
    <img src={KegImage} alt="keg" />
    </React.Fragment>
  );
}

export default Header;