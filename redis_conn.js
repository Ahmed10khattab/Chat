const redis = require('redis')


const currentClient = redis.createClient({
    host: '127.0.0.6',
    port: 3000,
});



const openClient = async () => {
    await currentClient.connect()
    console.log('client is ready!')
}






module.exports = { openClient, currentClient }



// const { createClient } = require('redis');

// const currentClient = createClient({
//   host: 'localhost', // Replace with your Redis server's IP or hostname
//   port: 3000,        // Replace with the port your Redis server is listening on
// });

// currentClient .on('error', (err) => {
//   console.error('Redis Error:', err);
// });
// const openClient = async () => {
//     await currentClient.connect()
//     console.log('client is ready!')
// }
// currentClient.on('ready', () => {
//   console.log('Redis client connected and ready');
  
//   // Perform Redis operations when the client is ready
// });

// module.exports = { openClient,currentClient }