
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const router = require("./router/index.js");
require('dotenv').config();
const PORT = 3004
const morgan = require('morgan');
const apicache = require("apicache");
//configure apicache 
let cache = apicache.middleware

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
// let corsOptions = {
//     origin: 'https://lenodev.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))
 app.use(cors());
app.use(morgan("dev"));
app.use(cache('5 minutes'));

app.use("/",router);

app.listen(PORT,function(){
    console.log(`app is runing on port-${PORT} `);
})
