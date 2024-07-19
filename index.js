const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();  // Ensure this is invoked correctly

const connectDb = require('./config/db');
const router = require('./routes/index');  

const app = express();

// CORS Configuration
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true // Fixed the key name to 'credentials'
}));

app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api', router);

// Error Handling Middleware (Optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`The server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to the database", error);
    });
