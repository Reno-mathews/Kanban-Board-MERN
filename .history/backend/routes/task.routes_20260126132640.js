const express = require("express");
const auth = require("../middleware/auth");
const requireAdmin = require("../middle/requireAdmin");

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} = require("../controllers/requireAdmin");

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/", auth, createTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, requireAdmin, deleteTask);

module.exports = router;
