const mongoose = require("mongoose");
const { connectmongoDB } = require("./serverConfig")

module.exports.connectmongoDB = async () => {
    try {
         mongoose.connect(connectmongoDB);
        console.log("Connected to Database");
    } catch (error) {
        console.log('Connection to Database Failed, Please try again. ');
    }
};

