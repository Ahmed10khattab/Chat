const User=require('../models/user');


const updateUser=async(req,res)=>{
    try {
      const updateUser=await User.findByIdAndUpdate(req.params.id,
        {$set:req.body},
        {new:true});
      res.status(200).json({msg:"update success",updateUser});
    } catch (error) {
        res.status(500).json(error);

    }
}

const getUser=async(req,res,next)=>{
  
    try {
      const Users=await User.find();
      res.status(200).json(Users);
    } catch (error) {
        res.status(500).json(error);

    }
}


const deletUser=async(req,res)=>{
    try {
      const Users=await User.deleteMany();
      res.status(200).json('all User deleted success');
    } catch (error) {
        res.status(500).json(error);

    }
}

const getOneUser=async(req,res,next)=>{
    
    
    try {
      const OneUser=await User.findById(req.params.id);
      res.status(200).json(OneUser);
    } catch (error) {
        res.status(500).json(error);

    }
}

const DeleteOneUser=async(req,res)=>{
    try {
      const OneUser=await User.findByIdAndDelete (req.params.id);
      res.status(200).json("User deleted success");
    } catch (error) {
        res.status(500).json(error);

    }
}

module.exports={getOneUser,getUser,DeleteOneUser,deletUser,updateUser}