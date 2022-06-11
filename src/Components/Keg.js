import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  const stock = props.pints === 0 ? "Out of Stock" : props.pints
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p>Price: ${props.price}</p>
        <p>Alcohol Content: <em>{props.alcoholContent}%</em></p>
        <p>Pints: {stock}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func


  
};

export default Keg;