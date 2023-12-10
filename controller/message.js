const express=require('express');
const message = require('../models/message');
const createMSG=async(req,res)=>{
    const {sender,chatId,msg}=req.body;
    try {
        const NewMsg= new message({
            sender:sender,
            chatId:chatId,
            msg:msg

            
        });
        const saveMsg=await NewMsg.save();
        res.status(201).json(saveMsg);
    } catch (error) {
        res.status(500).json(error);

    }


} 


const GetMessages=async(req,res)=>{
    const {chatId}=req.params;
    try {
        const msg=await message.find({chatId})
        
        res.status(200).json(msg);
    } catch (error) {
        res.status(500).json(error);

    }


} 
module.exports={createMSG,GetMessages};