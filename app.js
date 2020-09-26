const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const env = process.NODE_ENV || "development";
const config = require('./config.json')[env];

class App{
    constructor(){
        this.app
    }

    init(){
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors())

        mongoose.connect(`${config.database.protocol}://${config.database.user}:${config.database.password}@${config.database.host}/${config.database.name}b?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })



        this.app.get('/', (req, res)=>{
            res.send("HELLO WORLD!!!");
        })

        this.app.listen(3000, ()=>{
            console.log("Server running on port 3000 ")
        })
    }
}


new App().init();
