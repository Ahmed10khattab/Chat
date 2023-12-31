const express= require('express');
 const app= express();
 
 const mongo=require('mongoose');
  const auth = require('./routes/auth');
const user =require('./routes/user');
 const Chat = require('./routes/Chat');
 const MSG = require('./routes/message');
//const PORT = process.env.PORT || 4000


const cookieParser=require('cookie-parser');
 
mongo.connect('mongodb+srv://user3:sdZbGMfi2nMO8ZOc@atlascluster.ytbxqwi.mongodb.net/ChatApp?retryWrites=true&w=majority')
.then(()=>{console.log('connected mongoose successfull')},)
.catch((error)=>
    console.log(error)

)

 


app.use(cookieParser());
 app.use(express.json());
   app.use('/auth',auth);
 app.use('/user',user);
 app.use('/chat',Chat);
 app.use('/MSG',MSG);



 app.get('/b',(req,res)=>{
  res.send('test');
 })











 const openClient = require('./redis_conn').openClient

 openClient()
 
 
 // cluster part ...
 const numOfCpus = require('os').cpus().length
 const cluster = require('cluster');
 
 
 // listening to the server 
 
 if (cluster.isMaster) {
     // console.log(`Primary ${process.pid} is running`);
 
     // Fork workers.
     for (let i = 0; i < numOfCpus; i++) {
         cluster.fork();
     }
 
     cluster.on('exit', (worker, code, signal) => {
         // console.log(`worker ${worker.process.pid} died`);
         cluster.fork();
 
     });
 } else {



 const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const currentClient = require('./redis_conn').currentClient

 

io.on('connection', (client) => {
  console.log('A user connected:', client.id);




  client.on('joinRoom',  (userId) => {
    console.log(`${userId}`);
    client.join(userId);
     
  });



   client.on('sendMsg',async (data) => {

console.log(data.receiverID);
 
    io.to(data.receiverID).emit('newMsg',{
      msg:data.msg  ['msgTxt'] 

     })
 
    console.log(data.msg['msgTxt']);

});

client.on('close',async (userId) => {

  await currentClient.del(userId)


})   

client.on('disconnect', () => {
  // remove reciver id from redis
  console.log(`Socket disconnected: ${client.id}`);
});


 
}); 






server.listen(3000,()=>{
    console.log('created server successfully');
});



 }


