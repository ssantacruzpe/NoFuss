const express = require("express");
const cors = require("cors");
const connection = require("./connection");
const app = express();
const router = require("./Router/router");

app.use(express.json());
const port = 3000;

app.use("/hh", router);


app.listen (port, () =>{
    console.log(`App is listening on port ${port}`);
})