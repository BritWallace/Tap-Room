import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickDelete, onClickIncrease, onClickingDecrease } = props;
  const pints = keg.pints === 0 ? "Out of Beer" : keg.pints;
  const buyButton = keg.pints === 0 ? <p></p> : <button onClick={() => onClickingDecrease(keg.id)}>Buy</button>
  return (
    <React.Fragment>
    <h1>KegDetail</h1>
    <hr />
    <h3>Name: {keg.name}</h3>
    <h3>Brand: {keg.brand}</h3>
    <hr />
    <p>Alcohol Content: {keg.alcoholContent}%</p>
    <p>Price: ${keg.price}%</p>
    <p>Pints left: {pints}</p>
    <button onClick={() => onClickIncrease(keg.id)}>Restock</button>
    <button onClick={() => onClickDelete(keg.id)}>Delete keg</button>
    {buyButton}


    </React.Fragment>


  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingIncrease: PropTypes.func,
  onClickingDecrease: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;

