let mongoose = require('mongoose')
const Schema = mongoose.Schema;

let signupSchema = new Schema({
    userName : { type : String},
    password : { type : String},
    fullname : {type : String},
    mobileNumber : {type : String}
})

module.exports = mongoose.model('signup',signupSchema);