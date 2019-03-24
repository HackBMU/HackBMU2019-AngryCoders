import React, { Component } from "react";
import "../custom.css";
import SimpleAppBar from "../TitleBar/TitleBar";
import BottomBar from "../BottomBar/BottomBar";
import Karousel from "../Carousel/Carousel";
import GameCategory from "../GamesCategory/GameCategory";
import PopularEvents from "../PopularEvents/PopularEvents";


const Games =() => {
    return (
      <div>
      <SimpleAppBar />
        
        <PopularEvents />
        <BottomBar />
      </div>
    );
  };


export default Games;
