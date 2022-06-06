import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => whenKegClicked(props.id)}>
        <h3>Beer Name:{props.name}, Brand: {props.brand}</h3>
        <p>Price: ${props.price}</p>
        <p>Alcohol Content: <em>{props.alcoholContent}%</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,


  
};

export default Keg;