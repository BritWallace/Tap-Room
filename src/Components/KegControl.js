import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
// import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false
    
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  handelAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState ({
      mainKegList: newMainKegList,
      formVisibleOnPage: false
    });
  }






  

render(){
    let currentlyVisibleState = null; 
    let addKegButton = null;
    let buttonText = null;
    if (this.state.editing){
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to keg list"
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails
        keg={this.state.selectedKeg}
        onClickDecrement={this.handleDecrementKegStock}
        onClickIncrease={this.handleIncreaseKegStock}
        onClickDelete={this.handleDeleteKeg}
        onClickEdit={this.handleEditKeg} />
      buttonText = "Return to keg list"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg}/>
      // buttonText = "Add Keg";
    }
    
    


  return(
    <React.Fragment>
      {currentlyVisibleState}
        {/* <button onClick={this.handleClick}>{buttonText}</button> */}

    </React.Fragment>
  )

  }
}


export default KegControl;


