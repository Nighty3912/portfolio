const mongoose = require("mongoose")

const DataSchema=new mongoose.Schema({
    userName:
    {
        type: String,
        required: true
    },
    firstName:
    {
        type: String,
        required: true
    },
    lastName:
    {
        type: String,
        required: true
    },
    phoneNumber:
    {
        type: String
    },
    email:{
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    confirmPassword:
    {
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required:true
    },
})

const userModel = mongoose.model('User', DataSchema);



// async function findUserByName(nam) {
//     try {
//         const docs = await userModel.find({ name: `${nam}` });
//         console.log("User data is : ", docs);
//     } catch (error) {
//         console.error(error);
//     }
// }
// findUserByName("Ahmad");


module.exports= userModel