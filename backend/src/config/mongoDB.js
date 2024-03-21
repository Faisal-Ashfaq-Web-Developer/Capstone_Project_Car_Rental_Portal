const mongooes = require("mongoose");
const { connectmongoDB } = require("./serverConfig")

module.exports.connectmongoDB = async () => {
    try {
        await mongooes.connect(connectmongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to Database");
    } catch (error) {
        console.log('Connection to Database Failed, Please try again. ');
    }
};

