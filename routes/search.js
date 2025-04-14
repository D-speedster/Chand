let express = require("express");

let App = express.Router();
const axios = require('axios');
const { SearchHandler } = require("../controllers/Search");
App.get('/', SearchHandler)
module.exports = App;