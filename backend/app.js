const express = require ('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./src/routes/authRoute');

const PORT = process.env.PORT || 8000;

const app = express();

const AuthRouter = require('./src/routes/authRoute');

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

// Route to create a new user
app.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Create a new user document
        const newUser = new User({ username, email, password });
        // Save the new user to the database
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// User routes for requests starting with '/api/users'
app.use('/api/users', authRoute);

app.get('/', (req, res) => {
    res.send('Server is working')
});


// Server listening to PORT
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}` );
});


