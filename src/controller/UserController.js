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
}

module.exports = UserController;