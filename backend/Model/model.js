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
        enum: ["To Do", "In Progress", "Done"]
    },

    taskOwner:{
        type: String,
        required: true
    },
})

const taskEntries = mongoose.model("taskEntries", taskSchema);

module.export = taskEntries;