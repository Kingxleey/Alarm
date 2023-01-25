const express = require ("express")
const morgan = require("morgan")
const fs = require ("fs")
const path = require ("path")


const app = express();

app.use(express.json());

let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
 flags: "a" ,
})
app.use(morgan("combined", {stream: accessLogStream}));

module.exports = app;