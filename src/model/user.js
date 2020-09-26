const mongoose = require('mongoose');


class User extends mongoose.Schema{
    constructor(){
        super(
            {
                username: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                password: {
                    type: String,
                    required: true
                },
                email: {
                    type: String,
                    required: true
                },
                active: {
                    type: Boolean,
                    required:false
                }
            }  
        );

        mongoose.model("User", this);
    }
}

module.exports = User