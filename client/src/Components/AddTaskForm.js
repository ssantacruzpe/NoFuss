import React, { useState } from "react";
import "./AddTaskForm.css"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTaskForm(){
    const [taskName, setTaskName] = useState("");
    const [taskDeadline, setTaskDeadline] = useState("");
    const [taskStatus, setTaskStatus] = useState("");
    const [taskOwner, setTaskOwner] = useState("");
    const navigate = useNavigate();

    async function createTaskForm(e){
        e.preventDefault();
        let res = await axios
            .post("http://localhost:3000/hh/create", {taskName, taskDeadline, taskStatus, taskOwner});
            alert (res.data.msg);
            navigate("/hh");    
        }

    return(
        <div>
            <div>
                <h1 id="addTaskFormTitle">Add A Task</h1>
            </div>
             <form id="addTaskForm" onSubmit={createTaskForm} value="taskCreateForm">
                <input 
                    type="text" 
                    value={taskName} 
                    onChange={(e) => setTaskName(e.target.value)} 
                    placeholder="What is the task?"
                />
                <input 
                    type="date" 
                    value={taskDeadline} 
                    onChange={(e) => setTaskDeadline(e.target.value)}
                    placeholder="When is this task due?" 
                />
                <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
                    <option hidden value="prompt">What is the status of the task?</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <input 
                    type="text" 
                    value={taskOwner} 
                    onChange={(e) => setTaskOwner(e.target.value)} 
                    placeholder="Who is responsible for this task?"
                />
                <button type="submit">Cancel</button>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}


export default AddTaskForm;