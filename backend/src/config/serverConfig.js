const envObj = require("dotenv");
envObj.config();
module.exports = {
    PORT: process.env.PORT,
    connectmongoDB: process.env.mongoURL,
    JWT_KEY: process.env.JWT_KEY,
};