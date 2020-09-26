const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const env = process.NODE_ENV || "development";
const config = require('./config.json')[env];
const User = require('./src/model/User')

class App{
    constructor(){
        this.app
    }

    init(){
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors())

        mongoose.connect(`${config.database.protocol}://${config.database.user}:${config.database.password}@${config.database.host}/${config.database.name}b?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify:true
            })

        new User();

        const UserRoute = require('./src/route/UserRoute');
        new UserRoute(this.app)


        this.app.get('/', (req, res)=>{
            res.send("Controle de Contas Backend - NYD");
        })

        this.app.listen(config.port, ()=>{
            console.log(`Server running on port ${config.port}`)
        })
    }
}


new App().init();
