const express = require("express");
const auth = require("../middleware/auth");
const requireAdmin = require("../middle/requireAdmin");

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} = require("../controllers/requireAdmin");