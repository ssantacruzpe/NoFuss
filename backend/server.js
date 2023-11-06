const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const connection = require("./connection");
const Router = require("./Router/router");
const userRouter = require("./Router/userRouter");

const verifyToken = require("./Middleware/auth");

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors({origin: "*",}));
    
app.use("/hh", Router);
app.use("/landing", userRouter);

app.use((err, req, res, next)=>{
    console.error(err);
    res
        .status(500)
        .send("Server Error");
    });

app.get("/testToken", verifyToken, async(req, res)=>{
    res 
        .send("protected route");
});

app.listen (port, () =>{
    console.log(`App is listening on port ${port}`);
})