const express = require('express');
const app=express();
const cors = require('cors')
const mongoose=require("mongoose");
const router = require('./Routes/UserRoutes');
const connectDB=require('./config/db')
    
const port=5000;
app.use(cors())
app.use(express.json()) //works as a middleware
app.use("/",router)

connectDB();
// //connection of database mongodb
// mongoose.connect("mongodb://localhost:27017/testing")



 //to use the routes taht we just created
app.listen(port,()=> { // to make the server work on the given port
    console.log(`Successfully working on ${port}`);
})