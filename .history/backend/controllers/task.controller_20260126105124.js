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

    if (!title)
        return res.status(400).json({ message: "Title is required" });

    const task = await Task.create({
        title,
        column: column || "todo",
        owner: req.user.userId,
    });

    res.status(201).json(task);
};

// UPDATE task (owner or admin)
exports.updateTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if(!task)
        return res.status(404).json({ message: "Task not found"});

    const isOwner = task.owner.toString() === req.user.userId;
    const isAdmin = req.user.role === "admin";

    if(!isOwner && !isAdmin)
        return res.status(403).json({ message: "Forbidden"});

    task.title = req.body.title ?? task.title;
    task.column = req.body.column ?? task.column;

    await task.save();
    res.json(task);
};

//
