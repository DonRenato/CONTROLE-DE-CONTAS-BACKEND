const mongoose = require('mongoose');


class Bill extends mongoose.Schema{
    constructor(){
        super(
            {
                description: {
                    type: String,
                    required: true
                },
                types: {
                    type: String,
                    enum: ["Receita" , "Despesa"],
                    required: true
                },
                value: {
                    type: Number,
                    required: true
                },
                observation: {
                    type: String,
                    required: false
                },
                date: {
                    type: Date,
                    required:false
                }
            }  
        );

        mongoose.model("Bill", this);
    }
}

module.exports = Bill