const express = require("express");
const userRouter = express.Router();
const {register,login, getUserInfo} = require("../Controllers/userController");
const verifyToken = require("../Middleware/auth");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/userInfo", verifyToken, getUserInfo); 

module.exports = userRouter;