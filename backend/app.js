const express = require ('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;
const app = express();

// Load environment variables
dotenv.config();

//Middleware
app.use(express.json());

//Connection to Database
mongoose.connect(process.env.DB).then(() => {
    console.log("Connected to Mongo DataBase")
}).catch(() => {
    console.log("Connection Failed to Mongo DataBase");
})


app.get('/', (req, res) => {
    res.send('Server is working')
});


// Server listening to PORT
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}` );
});


