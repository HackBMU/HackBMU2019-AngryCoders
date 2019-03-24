import React, { Component } from "react";

import "./PopularEvents.css";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

class PopularEvents extends React.Component {
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
        <h3>Popular Events</h3>
        <AppBar position="static" color="default">
          <Tabs
            className="horizontal_scroll_2"
            value={value}
            indicatorColor="default"
            onChange={this.handleChange}
            variant="scrollable"
          >
            <Tab
              icon={
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">Lizard</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
            />
            <Tab
              icon={
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">Lizard</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
            />
            <Tab
              icon={
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">Lizard</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
            />
            <Tab
              icon={
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">Lizard</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
            />
            <Tab
              icon={
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">Lizard</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
            />
            <Tab
              icon={
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">Lizard</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
            />
            <Tab
              icon={
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">Lizard</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
            />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

PopularEvents.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PopularEvents);
