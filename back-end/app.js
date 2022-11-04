"use strict";

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
const LOCALHOST = 8000;
const FILE_ERROR = 500;
const XKCD_MAX = 2690;
const XKCD_BASE = "https://xkcd.com/";
const XKCD_JSON = "/info.0.json";
const SERVER_ERROR = "Something went wrong on the server.";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors("http://localhost:4200"));

/* TODO: Implement a 'GET' endpoint to fetch a random XKCD webcomic
 * Example request endpoint: https://xkcd.com/{comicId}/info.0.json
 * Where 'comicId' is a random number between 1 and XKCD_MAX
 * Remember to implement error handling!
 */



/**
 * this function generates a number from 1 to max(given)
 * @param {int} max - the maximum random number to generate
 * @returns {int} - a random number between 1 to max
 */
function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * max);
}

/**
 * this function checks if the response of an HTTP request is valid
 * @param {Response} res - HTTP response
 * @returns {Response} - the original response if it is valid
 * @throws - throws an error if the response is not valid
 */
function checkStatus(res) {
  if (!res.ok) {
    throw Error("Error in request: " + res.statusText);
  } else {
    return res;
  }
}

/**
 * this function handles any response error and sends a server error as response
 * @param {Response} res - HTTP response
 */
function handleError(res) {
  res.type("text");
  res.status(FILE_ERROR).send(SERVER_ERROR);
}

const PORT = process.env.PORT || LOCALHOST;
app.listen(PORT);
