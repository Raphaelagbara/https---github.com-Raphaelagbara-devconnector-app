
const config = require('config');
const mongoose = require('mongoose');
//config lib will help us load the required configuration in the app

const db = "mongodb://localhost:27017/devConnector";

const connectDB = async() =>{
    try{
        console.log("before the connect method");
        await mongoose.connect(db,{});
        console.log("mongodb connected");
    }
    catch(err){
        console.log(JSON.stringify(err));

    }

    
}

module.exports = connectDB;