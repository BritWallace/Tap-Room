import React from 'react'
import PropTypes from 'prop-types'

function Reusable(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type="text"
        name="name"
        placeholder="Pair Names" />
        <input
          type="text"
          name="brand"
          placeholder="Brand" />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol Content" />
          <input
          type="number"
          min={1}
          name="price"
          placeholder="Price" />
          <input
          type="number"
          min={1}
          name="pints"
          placeholder="Pints left" />
          <button type='submit'>{props.buttonText}</button>
      </form>
      <hr />
      
            
            

      
      
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
