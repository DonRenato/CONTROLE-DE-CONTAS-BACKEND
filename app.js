const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

class App{
    constructor(){
        this.app
    }
    
    init(){
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors())

        this.app.listen(3000, ()=>{
            console.log("Server running on port 3000 ")
        })
    }
}


new App().init();
