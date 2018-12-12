let signUp = require('../models/signup');

exports.save = (req,res)=>{
    let reqBody = req.body;

    let nSignup = new signUp({
        userName : reqBody.userName,
        password : reqBody.password,
        fullname : reqBody.fullname,
        mobileNumber : reqBody.mobileNumber,
    })

    nSignup.save( (error,success) => {
        if(error){
            console.log('error');
            res.status(500).json({error: "error while saving"});
        }
        else{
            res.status(200).json(success);
        }
    })
}

exports.getCren = (req,res) => {
    let reqBody = req.body;
    signUp.findOne({userName : reqBody.userName, password : reqBody.password}, (error,success) => {
        if(error){
            console.log('error');
            res.status(500).json({error: "error while saving"});
        }
        if(!success){
            res.status(400).json({error: "user not found"});
        }
        else{
            res.status(200).json(success);
        }
    })
}