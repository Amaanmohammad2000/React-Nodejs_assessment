const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    profession:{
        type: String,
        required: true
    }
});

const list = new mongoose.model("List", listSchema);

module.exports = list;