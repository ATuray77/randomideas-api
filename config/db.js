const mongoose = require('mongoose'); //using this variable to connect to database

const connectDB = async () => {  //using async await to to connect. 
    const conn = await mongoose.connect(process.env.MONGO_URI); //mongoose.connect method returns a promise. use process.env to access the uri
    console.log(`MongoDB Connected: ${conn.connection.host}`);//display the host name
}

module.exports = connectDB