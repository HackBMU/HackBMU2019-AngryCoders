import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Home/home";
import Create from "./Create/Create";
import Games from "./MyGames/games";
import User from "./User/user";
import Notifications from "./Notification/notification";
import Errors from "./Error/error";
// import Navigation from "./navigation";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navigation /> */}

          <Route exact path="/" component={Home}/>
          <Route path="/mygames" component={Games} />
          <Route path="/create" component={Create} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/user" component={User} />
          {/* <Route component={Errors} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
