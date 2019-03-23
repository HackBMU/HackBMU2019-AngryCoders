"use strict";

const game = require("../db/game.json");
const event = require("../db/events.json");

const getdata = {
  games: (req, res) => {
    res.send(game);
  },
  events: (req, res) => {
    res.send(event);
  }
};

module.exports = getdata;
