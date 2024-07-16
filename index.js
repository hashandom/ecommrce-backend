// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();  // Fix: invoke config()

const connectDb = require('./config/db');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

connectDb()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`The server is running on port ${PORT}`);
    });
}).catch((error)=>{
    console.error("Failed to connect to the database" , error)
})


