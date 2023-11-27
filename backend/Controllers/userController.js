const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async(req, res) =>{
    try{
        let {userName, email, password} = req.body;
        if(!userName, !email, !password){
            return res 
                .status(402)
                .send({msg: "All fields are required"});
    }
    let found = await User.findOne({email});
    if (found){
        return res
            .send({msg:"Email already exists, register with different one or login"});
    }
    let hashPassword = await bcrypt.hash(password, +process.env.SALT_ROUND);
    await User.create({userName, email, password:hashPassword});
    return res
            .status(200)
            .send({msg:"Successful registration"})
} catch (err){
    console.log(err);
    res 
        .status(500)
        .send({msg:"Internal server error, please try again later"})
    }
};

const login = async(req, res) =>{
    try{
        let {email, password} = req.body;
        if (!email, !password){
            return res
                .status(402)
                .send({msg:"Both email and password and required"});
        }
        let existingUser = await User.findOne({email});
        if (existingUser){
            let validPassword = await bcrypt.compare(password, existingUser.password);
            if (!validPassword){
                return res
                    .status(401)
                    .send({msg:"Invalid password"})
            } else {
                let token = jwt.sign({email: existingUser.email, id: existingUser._id, userName: existingUser.userName}, process.env.PRIVATE_KEY, {expiresIn: "3h"});
                res 
                    .status(200)
                    .send({msg:"Successful login", token});
            }
        } else {
            return res
                .status(404)
                .send({msg:"Invalid email"});
        }
    } catch (err){
        console.log(err);
            res 
                .status(500)
                .send({msg: "Internal server error, login failed"});
    }
};

const getUserInfo = async (req, res) => {
    try {
        let userId = req.user.id; 
        let user = await User.findById(userId).select('userName');
        res.status(200).send({ userName: user.userName });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal server error" });
    }
};

module.exports = { register, login, getUserInfo};