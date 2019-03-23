import React, { Component } from "react";
import "./custom.css";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import Karousel from "./Carousel/Carousel";
import GameCategory from "./GamesCategory/GameCategory";

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Karousel />
        <GameCategory />
        <BottomBar />
      </div>
    );
  }
}

export default App;
