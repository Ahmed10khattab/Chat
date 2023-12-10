const express =require('express');
const { createMSG, GetMessages } = require('../controller/message');
const rout=express.Router();
  
rout.post('/CreatMSG',createMSG);
rout.get('/getMessages/:chatId',GetMessages);
 
module.exports=rout;

