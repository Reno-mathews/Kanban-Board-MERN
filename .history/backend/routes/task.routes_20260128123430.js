const express = require("express");
const auth = require("../middleware/auth");
const requireAdmin = require("../middleware/requireAdmin");

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} = require("../controllers/task.controller");

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/", auth, createTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, requireAdmin, deleteTask);

module.exports = router;
