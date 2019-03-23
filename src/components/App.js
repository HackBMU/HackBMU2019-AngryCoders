import React, { Component } from "react";
import "./custom.css";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import UserProfile from "./UserProfile/UserProfile";

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <UserProfile />
        <BottomBar />
      </div>
    );
  }
}

export default App;
