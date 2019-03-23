import React, { Component } from "react";
import "./TopBar.css";

class TopBars extends Component {
  render() {
    return (
      <div className="topbar">
        <div>
          <a href="https://www.duit.fr/">DUIT</a>
        </div>
        <div>
          <a href="https://bit.ly/duit-playstore">SAVE TO PHONE</a>
        </div>
      </div>
    );
  }
}

export default TopBars;
