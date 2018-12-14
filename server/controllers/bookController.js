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
    Book.find({bookId : reqBody._id} , {userId : userId, isBooked:false}, (error,success) => {
        console.log("success ", success)
        if(error){
            console.log('error');
            res.status(500).json({error: "error while finding"});
        }
        res.status(200).json({data: success});
    })
}

exports.getSubscribe = (req,res) =>{
    let reqBody = req.body;
    let userId = mongoose.Types.ObjectId(reqBody.userId);
    Book.findOneAndUpdate({book_id : reqBody.book_id  , userId : userId} ,{ isBooked : true } , (error,success) => {
        console.log('success',success)
        if(error){
            console.log('error');
            res.status(500).json({error : 'error while updating'});
       }
       res.status(200).json({data : success});
    })
}

exports.getUnsubscribe = (req,res) =>{
    let reqBody = req.body;
    let userId = mongoose.Types.ObjectId(reqBody.userId);
    Book.findOneAndUpdate({book_id: reqBody._id }, {userId :  userId , isBooked : false } , (error,success) => {
        console.log('success',success)
        if(error){
            console.log('error');
            res.status(500).json({error : 'error while updating'});
       }
       res.status(200).json({data : success});
    })
}

exports.addBooks = (req,res) => {
    let reqBody = req.body;

    let aBooks = new Book({
        bookName : reqBody.bookName,
        authorName : reqBody.authorName,
        description : reqBody.description,
        url : reqBody.url,
    })

    aBooks.save( (error,success) => {
        if(error){
            console.log('error');
            res.status(500).json({error: "error while saving"});
        }
        else{
            res.status(200).json({data: success});
        }
    })
}