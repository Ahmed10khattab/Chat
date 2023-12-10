const jwt =require('jsonwebtoken');
const User = require('../models/user');





const verfiyToken=(req,res,next)=>{
    const token =req.cookies.access_token;
    if(!token){ res.status(500).json("you are not authanticated")}; 

    jwt.verify(token,"sec",(err,user)=>{
        if(err)res.json(500).json("token is not valid");
        req.user=user;
        next();
    });
}

const verfiyUser=(req,res,next)=>{
    verfiyToken(req,res,()=>{
        if(req.user.id ==  req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(500).json("you are  not autherized");
        }
    })
}


const verfiyAdmin=(req,res,next)=>{
    verfiyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(500).json("you are  not autherized as admin");
        }
    })
}


module.exports={verfiyUser,verfiyToken,verfiyAdmin}