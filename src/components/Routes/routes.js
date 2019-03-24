import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home/home";
import Create from "./Create/create";
import Games from "./MyGames/games";
import User from "./User/user";
import Notifications from "./Notification/notification";
import Errors from "./Error/error";
import Navigation from "./navigation";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/mygames" component={Games} />
            <Route path="/create" component={Create} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/user" component={User} />
            <Route component={Errors} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
