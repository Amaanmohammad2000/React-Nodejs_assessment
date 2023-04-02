const mongoose = require("mongoose");
const List = require("../models/list");

const controller = {};

controller.add = async (req, res) => {
    try {
        if(req.body){
            const {name, email, age, city, profession} = res.body;
            const newUser = await new List({
            name: name,
            email: email,
            age: age,
            city: city,
            profession: profession
        });
        newUser = await newUser.save();
        res.status(200).json({status: "Success", result: newUser});
        }
        else{
            res.status(400).json({status: "Failed", message: "Enter the details"});
        }
    } 
    catch (error) {
        res.status(400).json({status: "Failed", message: error.message});
    }
    
}