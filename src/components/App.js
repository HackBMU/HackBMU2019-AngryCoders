import React, { Component } from "react";
import "./custom.css";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import Karousel from "./Carousel/Carousel";
import GameCategory from "./GamesCategory/GameCategory";
import PopularEvents from "./PopularEvents/PopularEvents";

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Karousel />
        <GameCategory />
        <PopularEvents />
        <BottomBar />
      </div>
    );
  }
}

export default App;
