const express=require('express');
const route=express.Router();
const { register, login } = require('../controller/auth');
 



route.post('/register',register);
route.post('/login',login)
 



module.exports=route;