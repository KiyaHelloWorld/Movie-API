const mongoose = require("mongoose") //import 

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    isAdmin: {
        type: Boolean, 
        default: false 
    }
});

module.exports = mongoose.model("User", userSchema); //export   