const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // Check if localDB is defined in .env before attempting to connect
        if (!process.env.localDB) {
            throw new Error('localDB is not defined in .env file');
        }

        // Now connect to the DB
        await mongoose.connect(process.env.localDB);

        // console.log('Database connected successfully'); -- uncomment for debugging
        
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
