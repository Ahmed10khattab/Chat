const Chat = require('../models/Chat');


const CreateChat = async (req, res) => {
    const{sender , reciver}=req.body;

    try {
        // Check if the chat exists based on sender and receiver
        const chats = await Chat.find({
            $or: [
                { sender: sender, reciver: reciver }, // Check sender and receiver
                { sender: reciver, reciver: sender } // Also check receiver and sender (bidirectional search)
            ]
        });

           if (chats.length > 0) {
            // If chat already exists, return the existing chat
            return res.status(200).json({message: 'Chat already exists' });
        } else {
            // If chat doesn't exist, create a new chat
            const newChat   = new Chat(req.body); 
            const savedChat = await newChat.save();
            res.status(201).json({ chat: savedChat, message: 'Chat created successfully' });
        }
    } catch (error) {
      res.status(400).json({ error: 'Error creating or getting chat' });
    }
};



const FindUserChats = async (req, res) => {
    const userId = req.params.usertId;
    // const  receverid=req.params.receverid;
    const condition1 = { field1: 'value1' };
    const condition2 = { field2: 'value2' };

    try {

        const chat = await Chat.find({
            $or: [

                { sender: userId },
                { reciver: userId }
            ]
        }).populate('reciver').populate('sender');
        res.status(200).json(chat);



    } catch (error) {
        res.status(400).json(error)
    }

}

const FindOneChat = async (req, res) => {
    const { firstId, SecondId } = req.params;
    try {

        const chat = await Chat.find({ members: { $all: [firstId, SecondId] } });
        res.status(200).json(chat);



    } catch (error) {
        res.status(400).json(error)
    }

}

 module.exports = { CreateChat, FindOneChat, FindUserChats ,CreateChat };