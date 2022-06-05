import React from "react";
import PropTypes from "prop-types";

function Tap(prop){
  return (
    <React.Fragment>
      <div onClick = {() => whenTapClicked(props.id)}>
        <h3>Beer Name:{props.name}, Brand: {props.brand}</h3>
        <p>Price: ${props.price}</p>
        <p>Alcohol Content: <em>{props.alcoholContent}%</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tap.propType = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropType.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func,


  
};

export default Keg;