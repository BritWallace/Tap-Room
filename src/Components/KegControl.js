import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
// import KegDetail from "./KegDetail";
// import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [],
      formVisible: false,
      selectedKeg: null
    }
  }

  handleClick = () => {
    this.setState({formVisibleOnPage: true});
  }


  render () {
    let currentlyVisibleState = null; 
    let addKegButton = null;
    if (this.state.formVisibleOnPageChange) {
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList />
      addKegButton = <button onClick={this.handleClick}>Add Keg</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKegButton}
      </React.Fragment>
    );
  } 
}



export default KegControl;