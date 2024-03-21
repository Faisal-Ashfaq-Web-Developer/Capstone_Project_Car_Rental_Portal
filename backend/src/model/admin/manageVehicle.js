const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admin = new Schema({
    Add_Vehicle: {type: String },
    Description: {type: String },
    KM: {type: Number},
    category: String 
});

const adminModel = mongoose.model('Admin', admin);

module.exports = adminModel