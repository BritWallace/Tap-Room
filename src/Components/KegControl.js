import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    this.setState({formVisibleOnPage: true});
  }


  

render(){


  return(
    <React.Fragment>
      <h1>Place holder for what is currently being shown by formVisibleOnPage</h1>
    </React.Fragment>
  )

  }
}


export default KegControl;


// render () {
//   let currentlyVisibleState = null; 
//   let addKegButton = null;
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