import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

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
        formVisibleOnPage: !preState.formVisibleOnPage,
      }));
    }
  }


  

render(){
    let currentlyVisibleState = null; 
    let addKegButton = null;
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
      buttonText = "Add Keg";
    }
    
    


  return(
    <React.Fragment>
      <KegList kegList={this.state.mainKegList} />
    </React.Fragment>
  )

  }
}


export default KegControl;


// render () {

//   if (this.state.formVisibleOnPageChange) {
//     currentlyVisibleState = <NewKegForm />
//   } else {
//     currentlyVisibleState = <KegList />
//     addKegButton = <button onClick={this.handleClick}>Add Keg</button>
//   }
//   return (
//     <React.Fragment>
//       {currentlyVisibleState}
//       {addKegButton}
//     </React.Fragment>
//   );
// } 

// }