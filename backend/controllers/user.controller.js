const User = require("../models/user.model.js");

//user signup
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

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const existingUser = await User.findOne({ email });

    console.log("Existing user:", existingUser);

    const existingUserEmail = existingUser ? existingUser.email : null;
    const existingUserPassword = existingUser ? existingUser.password : null;

    if (existingUserEmail !== email) {
      return res.status(401).json({ message: "Invalid email!" });
    }

    if (existingUserPassword !== password) {
      return res.status(401).json({ message: "Invalid password!" });
    }

    res.status(200).json({ message: "Sucessfully Log In!", user: existingUser });
    console.log("User found:", existingUser);

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

