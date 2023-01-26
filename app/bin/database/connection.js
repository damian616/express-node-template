const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const logWithColor = require('../lib/lib.js')
logWithColor('WARNING mongoose "strictQuery" is set to FALSE ,review for unexpected results!', 'medium');


// Create db conection
const connectDB = async () => {
    try {
        // mongodb connection string
        const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/express';
        const con = await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logWithColor(`MongoDB connected : ${con.connection.host}`, 'success');
        // log a message when the connection to the MongoDB server is lost
        mongoose.connection.on('disconnected', () => {
            logWithColor('MongoDB connection lost' , 'high');
        });
    } catch (err) {
        logWithColor(`Error connecting to MongoDB: ${err.message}`, 'high');
        process.exit(1);
    }
};


// ALTERNATIVE CONNECTION STRUCTURE
var db = mongoose.connection;
var db2 = db.useDb('someDbName');
let m2Schema = {
    pid: String,
}
var Model2 = db2.model('Model2', m2Schema, 'testModel') ;


// export connection
module.exports = connectDB