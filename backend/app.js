const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test';
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());


// Connect to MongoDB
mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});