import React, { Component } from "react";

import "./GameCategory.css";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    color: "#86c232"
    // backgroundColor: "black"
  },
  avatar: {
    margin: 20,
    width: 80,
    height: 80
  }
});

class GameCategory extends React.Component {
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
      <div className={classes.root}>
        <h3>Games</h3>
        <AppBar position="static" color="default">
          <Tabs
            className="horizontal_scroll"
            value={value}
            indicatorColor="default"
            onChange={this.handleChange}
            variant="scrollable"
          >
            <Tab
              label="PUBG Mobile"
              icon={
                <Avatar
                  alt="PUBG"
                  src="https://i.ibb.co/0DNYfzv/Whats-App-Image-2019-03-24-at-5-37-54-AM.jpg"
                  className={classes.avatar}
                />
              }
            />
            <Tab
              label="CS GO"
              icon={
                <Avatar
                  alt="CSGO"
                  src="https://i.ibb.co/TKdQrZV/Whats-App-Image-2019-03-24-at-5-49-18-AM.jpg"
                  className={classes.avatar}
                />
              }
            />
            <Tab
              label="FIFA 19"
              icon={
                <Avatar
                  alt="FIFA"
                  src="https://i.ibb.co/hFF7W0n/Whats-App-Image-2019-03-24-at-5-40-10-AM.jpg"
                  className={classes.avatar}
                />
              }
            />
            <Tab
              label="Item Four"
              icon={
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                  className={classes.avatar}
                />
              }
            />
            <Tab
              label="Item Five"
              icon={
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                  className={classes.avatar}
                />
              }
            />
            <Tab
              label="Minimilitia"
              icon={
                <Avatar
                  alt="Minimilitia"
                  src="https://i.ibb.co/PQ6fk2z/Doodle-Army-2-624x351.jpg"
                  className={classes.avatar}
                />
              }
            />
            <Tab
              label="Item Seven"
              icon={
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                  className={classes.avatar}
                />
              }
            />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

GameCategory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameCategory);
