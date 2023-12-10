const mongoose=require('mongoose');
const msgSchema=mongoose.Schema({
   sender:String,
    chatId:String,  
   msg:String 
},
{timestamps:true});
module.exports=mongoose.model('Message',msgSchema);