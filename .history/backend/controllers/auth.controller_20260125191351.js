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

    const existingUser = await User.findOne({ email });
    if (existingUser)
        return res.status(400).json({ message: "User already exists"});

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        passwordHash,
    });

    const token = generateToken(user);

    res.status(201).json({
        token,
        user: {
            id: user._id,
            email: user.email,
            role: user.role,
        },
    });
};

// LOGIN 
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if(!user)
        return res.status(400).json({ message: "Invalid credentials "});
    
}