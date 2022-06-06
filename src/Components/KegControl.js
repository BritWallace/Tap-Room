import React from 'react';
// import NewKegForm from './NewKegForm';
// import KegList from './KegList';
// import KegDetail from "./KegDetail";
// import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [],
    }
  }

  render() {

  return (
    <React.Fragment>
    <KegList kegList={this.state.mainKegList} />
    </React.Fragment> 
    );
  }
}











export default KegControl;