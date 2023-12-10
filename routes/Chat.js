const express =require('express');
const router=express.Router();
const { CreateChat, FindUserChats, FindOneChat } = require('../controller/chat');
 
router.post('/CreatChat',CreateChat);
router.get('/getUserChats/:usertId/',FindUserChats) ;
router.get ('/findOneChat/:firstId/:SecondId',FindOneChat);



module.exports=router;

