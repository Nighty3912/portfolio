const mongoose = require('mongoose');
const dotenv=require('dotenv')

dotenv.config();
const URI =process.env.DATABASE_URI;

async function connectDB() {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
