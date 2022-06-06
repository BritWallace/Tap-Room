import React from "react";
import Header from "./Header";
import KegList from "./KegList";
import KegControl from "./KegControl.js";

function App(){
  return (
    <React.Fragment>
      <Header />
      <KegControl />
      <KegList />
    </React.Fragment>
  );
}

export default App;