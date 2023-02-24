const { Console } = require("console");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config({path: "./config.env"})
const mongoose = require("mongoose");
const app = require("./index");
const {port, DB_URL} = process.env;


mongoose.connect (DB_URL)
.then(()=> Console.log("connected"))
.catch((err) => console.log (err));

app.listen (port,()=> {
console.log(`server is running fine in ${port}`)
})