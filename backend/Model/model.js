const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    taskName:{
        type: String,
        required: true
    },

    taskDeadline: {
        type: Date,
        required: true
    },

    taskStatus: {
        type: String,
        required: true,
        enum: ["To Do", "In Progress", "Done", "Overdue"]
    },

    taskOwner:{
        type: String,
        required: true
    },

    taskPriority:{
        type: String,
        required: true,
        enum: ["High", "Medium", "Low"]
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

const taskEntries = mongoose.model("taskEntries", taskSchema);

module.exports = taskEntries;