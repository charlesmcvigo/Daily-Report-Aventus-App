const User = require("../models/user.model.js");

//user login
exports.SignUp = async (req, res) => {
    try {
        const users = { firstname, lastname, middlename, email, password } = req.body;

        if(!firstname || !lastname || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        };

        if(!middlename){
            users.middlename = null;
        };

        const newUser = new User(users);
        await newUser.save();
        res.status(201).json({message: "User created successfully", user: newUser});
    } catch (err) {
        res.status(500).json({ message: err.message || "Error retrieving users." });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); 
        res.status(200).json({ "Users" : users });
    } catch (err) {
        res.status(500).json({ message: err.message || "Error retrieving users." });
    }
};

