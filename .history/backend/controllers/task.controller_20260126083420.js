const Task = require("../models/Task");

// GET tasks (user gets own, admin gets all)
exports.getTasks = async (req,res) => {
    const filter =
        req.user.role === "admin" ? {} : { owner: req.user.userId };

        const tasks = await Task.find(filter);
        res.json(tasks);
};

// CREATE task
exports.createTask = async (req, res) => {
    const { title, column} = req.body;
}