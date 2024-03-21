const express = require ('express');
const PORT = require("./src/config/serverConfig");
const connectmongoDB = require("./src/config/mongoDB")

const app = express();

//Middleware
app.use(express.json());

//Connection to Database
connectmongoDB("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/car_rentalDB");


app.get('/', (req, res) => {
    res.send('server is working')
});



// Server listening to PORT
app.listen(PORT, () => {
  console.log("server started");
});
