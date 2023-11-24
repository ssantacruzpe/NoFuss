const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/auth");
const {createTask, getAllTasks, deleteTask, updateTask} = require ("../Controllers/controller")

router.post("/create", verifyToken, createTask);
router.get("/tasks",verifyToken, getAllTasks)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)

module.exports = router;