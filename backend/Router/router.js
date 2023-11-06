const express = require("express");
const router = express.Router();
const {createTask, getAllTasks, deleteTask, updateTask} = require ("../Controllers/controller")

router.post("/create", createTask)
router.get("/tasks", getAllTasks)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)

module.exports = router;