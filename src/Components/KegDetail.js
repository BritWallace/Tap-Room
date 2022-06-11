import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickDelete, onClickIncrease, onClickDecrement} = props;
  const pints = keg.pints === 0 ? "Out of Beer" : keg.pints;
  const buyButton = keg.pints === 0 ? <p></p> : <button> onClick={() => onClickingDecrement(keg.id)}Buy</button>
  return (
    <React.Fragment>
    <h1>KegDetail</h1>
    <hr />
    </React.Fragment>


  )
}

