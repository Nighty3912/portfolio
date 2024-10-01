const userModel = require('../models/userModel');
const {validationResult}=require('express-validator')
// exports.createUser= (req,res)=>{
//     const{name,email}=req.body
//     try {
//             res.status(200).json({
//             message:" user created successfully", User: {name,email}
//             })
            
//         } catch (error) {
//             res.status(404).json({message:"user not added"})
//         }
// }

exports.register =async (req,res) =>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const { userName, firstName,lastName,phoneNumber,email,password,confirmPassword,dateOfBirth} = req.body
    try{
        const userdata=userModel({userName, firstName,lastName,phoneNumber,email,password,confirmPassword,dateOfBirth})
        await userdata.save();
        res.status(200).json({message: "datasaved", data: {userdata} })
    }
    catch(error){
        res.status(404).json({message:`error is ${error}`})
    }
    
}
exports.createUser = async(req,res) => {
    const{name,email,phone}=req.body
    try{
    const userdata=userModel({name,email,phone})
    await userdata.save();

        res.status(200).json({message: "datasaved", data: {userdata} })
    }
    catch(error){
        res.status(404).json({message:`error is ${error}`})
    }
}

// exports.findUserByName = async (req, res) => {
//     const { name } = req.query; 
//     try {
//         const docs = await userModel.find({ name: name });
//         if (docs.length > 0) {
//             res.status(200).json(docs); 
//         } else {
//             res.status(404).json({ message: "No user found with that name" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: `Error: ${error.message}` });
//     }
// };


exports.findAllUsers = async (req, res) => {
    try {
        const docs = await userModel.find({});
        if (docs.length > 0) {
            res.status(200).json(docs);
        } else {
            res.status(404).json({ message: "No users found" });
        }
    } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
    }
};

exports.updateUser = async (req, res) => {
    const {name} = req.params; //user name
    const updates = req.body; //what to update
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, updates, { new: true });
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
    }
};

exports.deleteUser = async (req, res) => {
    const { name } = req.params; 
    try {
        const deletedUser = await userModel.findByIdAndDelete(id);
        if (deletedUser) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
    }
};
exports.findUserByName = async (req, res) => {
    const { name } = req.body; 
    try {
        const docs = await userModel.find({ name: name });
        if (docs.length > 0) {
            res.status(200).json(docs); 
        } else {
            res.status(404).json({ message: "No user found with that name" });
        }
    } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
    }
};
//all database
// and find data from one name




exports.calculation = (req,res)=>{
    const{value1,operator,value2}=req.body
    const result=eval(`${value1} ${operator} ${value2}`)
    try{
        res.status(200).json({
            message:"result is",result: {result}
        })
    }
    catch(error)
    {
        res.status(404).json({message: "I am Error"})
    }
}

exports.start =(req,res) =>{
    res.status(200).json({message:"Server is running"})
}