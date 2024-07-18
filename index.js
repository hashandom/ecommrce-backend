
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();  // Fix: invoke config()

const connectDb = require('./config/db');

const router  = require('./routes/index');  

//using the middlewares for express framework
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api',router);

const PORT = process.env.PORT || 3000;

connectDb()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`The server is running on port ${PORT}`);
    });
}).catch((error)=>{
    console.error("Failed to connect to the database" , error)
})


