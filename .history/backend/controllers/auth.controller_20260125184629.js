const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

// SIGNUP
exports.signup = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password)
        return res.status(400).json({ message: "Missing fields" });
    
}