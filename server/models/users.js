const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//schema:variable
//mongoose.schema will create a schema object, create the document type /specification
const userSchema = new Schema({
    name:{
        type: String,
        required: true},
    email:{
        type:String,
        required:true,
        unique:true,//will not allow duplicate emails
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        required:false,
    },
    date:{
        type:Date,
        default:Date.now//todays date with respect to server date
    },
    
});
module.exports = mongoose.model("user", userSchema);