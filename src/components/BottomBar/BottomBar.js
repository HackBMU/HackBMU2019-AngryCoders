import React, { Component } from "react";
import "./BottomBar.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import Home from "@material-ui/icons/Home";
import VideogameAsset from "@material-ui/icons/VideogameAsset";
import AddCircle from "@material-ui/icons/AddCircle";
import Notifications from "@material-ui/icons/Notifications";
import Person from "@material-ui/icons/Person";

const styles = {
  root: {
    width: "100%",
    background: "#222629"
  }
};

class BottomBar extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="bottombar">
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            className="icon"
            label="Home"
            icon={<Home />}
          />
          <BottomNavigationAction
            className="icon"
            label="Games"
            icon={<VideogameAsset />}
          />
          <BottomNavigationAction
            className="icon"
            label="Create"
            icon={<AddCircle />}
          />
          <BottomNavigationAction
            className="icon"
            label="Notifications"
            icon={<Notifications />}
          />
           <BottomNavigationAction
            className="icon"
            label="Profile"
            icon={<Person />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomBar);
