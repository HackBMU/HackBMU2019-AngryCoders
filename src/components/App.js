import React, { Component } from "react";
import "./custom.css";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";


class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        
        <BottomBar />
      </div>
    );
  }
}

export default App;
