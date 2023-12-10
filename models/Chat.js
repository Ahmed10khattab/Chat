const mongoose=require('mongoose');
const chatSchema = new mongoose.Schema({
    
    sender: {
       type: mongoose.Schema.Types.ObjectId,
      
       ref: 'user' // Reference to the User model
    },
    reciver: {
        type: mongoose.Schema.Types.ObjectId,
         ref: 'user' // Reference to the User model
      },
     
}, { timestamps: true });
module.exports=mongoose.model('Chat',chatSchema);