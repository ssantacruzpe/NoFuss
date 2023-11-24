const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(403).send({msg: "Authorization token is missing"});
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(403).send({msg: "Bearer token is missing"});
        }

        const decoded = jwt.verify(token, process.env.PRIVATE_KEY); 
        req.user = decoded; 
        next();
    } catch(err) {
        console.error(err);
        res.status(401).send({msg: "Invalid or expired token"});
    }
};

module.exports = verifyToken;
