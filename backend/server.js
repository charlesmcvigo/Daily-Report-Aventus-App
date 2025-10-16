require('dotenv').config();
const express = require('express');
const db = require('./config/db.js');

//routes
const userRoutes = require('./routes/user.routes.js');

const app = express();
app.use(express.json());



app.use('/api', userRoutes);


const PORT = process.env.PORT;

if (!PORT) {
    console.error('❌ PORT is not defined in .env file');
    process.exit(1); // Exit the app
}

app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}`);
    console.log(`Server is running...`);


    //only run database when server starts
    db();
});