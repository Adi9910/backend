const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("./db");
app.use(express.json());
app.use(require("./auth"));


app.listen(9000)
