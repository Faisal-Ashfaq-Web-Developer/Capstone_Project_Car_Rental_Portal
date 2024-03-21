const envObj = require("dotenv");
envObj.config();
module.exports = {
    PORT: process.env.PORT || 3000,
    connectmongoDB: process.env.mongoURL,
    JWT_KEY: process.env.JWT_KEY,
};