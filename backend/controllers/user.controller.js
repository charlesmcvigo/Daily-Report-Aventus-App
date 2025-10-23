const User = require("../models/user.model.js");
const { hashPassword, comparePassword } = require("../utils/hash.js");
const { signToken } = require("../utils/auth.js");

//user signup
exports.SignUp = async (req, res) => {
  try {
    const users = ({
      firstname,
      lastname,
      middlename,
      email,
      password,
      confirm_password,
    } = req.body);

    if (!firstname || !lastname || !email || !password || !confirm_password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!middlename) {
      users.middlename = null;
    }

    if (password !== confirm_password) {
      return res.status(400).json({ message: "Password do not match!" });
    }

    const hashedPassword = await hashPassword(password);
    users.password = hashedPassword;

    const newUser = new User(users);

    await newUser.save();

    console.log("Account created successfully!");
    res
      .status(201)
      .json({ message: "Account created successfully!", user: newUser });

    // NOTEEEEE!!
    // dapat signup dapat mag redirect sa login page.
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "Error creating an account!" });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const existingUser = await User.findOne({ email }).select("+password");

    console.log("Existing user:", existingUser);

    const existingUserEmail = existingUser ? existingUser.email : null;
    const existingUserPassword = existingUser ? existingUser.password : null;

    console.log("existingPassword:", existingUserPassword);

    if (existingUserEmail !== email) {
      return res.status(401).json({ message: "Incorrect email!" });
    }

    const confirmedPassword = await comparePassword(
      password,
      existingUser.password
    );

    if (!confirmedPassword) {
      return res.status(401).json({ message: "Incorrect password!" });
    }

    const token = signToken({ id: existingUser._id, email: existingUserEmail });

    // ✅ Set token sa cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res
      .status(200)
      .json({ message: "Sucessfully Log In!", user: existingUser });
    console.log("User found:", existingUser);
  } catch (err) {
    res.status(500).json({ message: err.message || "Error retrieving users." });
  }
};

exports.Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
    });
    res.status(200).json({ message: "Logged out successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error logging out." });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ Users: users });
  } catch (err) {
    res.status(500).json({ message: err.message || "Error retrieving users." });
  }
};
