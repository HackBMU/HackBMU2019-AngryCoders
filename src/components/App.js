import React, { Component } from "react";
import "./custom.css";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import Karousel from "./Carousel/Carousel";
class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Karousel />
        <BottomBar />
      </div>
    );
  }
}

export default App;
