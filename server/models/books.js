let mongoose = require('mongoose')
let Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

let bookSchema = new Schema({
    bookName : { type : String},
    authorName : { type : String},
    description : {type : String},
    url : {type : String},
    userId : {type : ObjectId, ref: 'signup'},
    isBooked : {type : Boolean, default: false}
})

module.exports = mongoose.model('books',bookSchema);