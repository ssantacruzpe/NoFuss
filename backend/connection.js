const mongoose = require ("mongoose");
require("dotenv").config();

URI = process.env.MONGODB_URI

main()
.then(() => console.log (`DB connected`)) 
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect(URI);
}

module.exports = main; 