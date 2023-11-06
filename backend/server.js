const express = require("express");
const cors = require("cors");
const connection = require("./connection");
const Router = require("./Router/router");

const port = 3000;
const app = express();

app.use(express.json());
app.use("/hh", Router);
app.use(cors({origin: "*",}));
    

app.listen (port, () =>{
    console.log(`App is listening on port ${port}`);
})