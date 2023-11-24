const taskEntries = require("../Model/model");

const createTask = async (req, res) => {
    try {
        let newTaskData = {
            ...req.body,
            userId: req.user.id 
        };
        let task = await taskEntries.create(newTaskData);
        res.send({ msg: "New task successfully created", task });
    } catch (error) {
        console.error('Error in createTask:', error);
        res.status(500).send({ msg: "Internal error, failed to create new task" });
    }
};

const getAllTasks = async (req, res) => {
    try {
        let userId = req.user.id;
        let tasks = await taskEntries.find({ userId: userId })
        res.status(200).send({ msg: "We successfully retrieved all tasks", tasks })
    } catch (error) {
        res.status(500).send({ msg: "Internal error, failed to retrieve tasks" })
    }
};

const deleteTask = async (req, res) =>{
    try{
        await taskEntries.deleteOne({_id: req.params.id});
        res
            .status(200)
            .send({msg:"Task successfully deleted"})
    } catch (error){
        res 
            .status(500)
            .send({msg:"Internal error, failed to delete task"})
    }
}

const updateTask = async (req, res) =>{
    try{
        let taskValue = req.body;
        await taskEntries.updateOne({_id:req.params.id}, taskValue);
        res
            .status(200)
            .send({msg:"Task successfully updated"})
    } catch (error){
        res  
            .status(500)
            .send({msg:"Internal error, failed to update task"})
    }
}

module.exports = {createTask, getAllTasks, deleteTask, updateTask}