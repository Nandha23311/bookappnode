let Book = require('../models/books');
let mongoose = require('mongoose')

exports.getSubscribedBook = (req,res) => {
    let reqBody = req.body;
    console.log("reqBody ", reqBody)
    if(!reqBody.userId){
        return res.status(400).json({error: "user id is empty"});
    }
    Book.find({userId: mongoose.Types.ObjectId(reqBody.userId)}, (error,success) => {
        console.log("success ", success)
        if(error){
            console.log('error');
            res.status(500).json({error: "error while finding"});
        }
        res.status(200).json({data: success});
    })
}
exports.getBooks = (req,res) => {
    let reqBody = req.body;
    Book.find({isBooked: false}, (error,success) => {
        console.log("success ", success)
        if(error){
            console.log('error');
            res.status(500).json({error: "error while finding"});
        }
        res.status(200).json({data: success});
    })
}