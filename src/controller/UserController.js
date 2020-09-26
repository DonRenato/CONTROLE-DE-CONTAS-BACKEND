const mongoose = require('mongoose');
const user = mongoose.model("User");

class UserController{   

    static async list(req, res){
       try {
        res.status(200).json( await user.find()) 
       } catch (error) {
        console.log("[USERS] : LIST => ERROR:" + error)
        res.status(500).send("Error during searching for users");
       }
    }

    static async create(req, res){
        try {
            let newUser = req.body
            res.status(201).json( await user.create(newUser)) 
           } catch (error) {
            console.log("[USERS] : CREATE => ERROR:" + error)
            res.status(500).send("Error during creating users");
           }
    }

    static async update(req, res){
        try {
            let editUser = req.body
            res.status(200).json( await user.findByIdAndUpdate(editUser._id, editUser)) 
           } catch (error) {
            console.log("[USERS] : CREATE => ERROR:" + error)
            res.status(500).send("Error during updating users");
           }
    }
}

module.exports = UserController;