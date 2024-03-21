const { default: mongoose } = require("mongoose");

//User Schema 
const userSchema = new mongoose.Schema({
    username: String
});

const Username = mongoose.model('Username',userSchema);

