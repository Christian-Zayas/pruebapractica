const express = require("express");
const morgan =  require("morgan");
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config()
const app = express();

// Connection a data base.
require("./dba/dba");

// Setting
app.set("port" , process.env.PORT || 3000);

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200' ,optionsSuccessStatus: 200}))
app.use('/api' , require('./routes/routerUser'));


// Exports app
module.exports = {
    app
}