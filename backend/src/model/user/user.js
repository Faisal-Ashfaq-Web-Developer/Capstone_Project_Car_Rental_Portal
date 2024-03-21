const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema 

const User = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const UserModel = mongoose.model('User', User);
module.exports = UserModel;

