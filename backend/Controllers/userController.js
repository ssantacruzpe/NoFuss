const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async(req, res) =>{
    try{
        let {userName, email, password} = req.body;
        if(!userName || !email || !password){
            return res 
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
