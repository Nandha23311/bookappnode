let signUp = require('../models/signup');

exports.save = (req,res)=>{
    let reqBody = req.body;

    let nSignup = new signUp({
        userName : reqBody.userName.toString().toLowerCase(),
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
            res.status(200).json({data: success});
        }
    })
}

exports.getCren = (req,res) => {
    let reqBody = req.body;
    console.log("reqBody ", reqBody)
    signUp.findOne({userName : reqBody.userName.toString().toLowerCase(), password : reqBody.password}, (error,success) => {
        console.log("success ", success)
        if(error){
            console.log('error');
            res.status(500).json({error: "error while saving"});
        }
        if(success == null){
            res.status(404).json({error: "user not found"});
        }
        else{
            res.status(200).json({data: success});
        }
    })
}