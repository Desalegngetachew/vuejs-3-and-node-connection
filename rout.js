const express = require("express");
// import { createData } from "./createData.js";
const createData = require("./createData");
const rout = express.Router();
const router = rout.post("/about", createData);

module.exports = router;
