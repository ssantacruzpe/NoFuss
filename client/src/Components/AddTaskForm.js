import React, { useState, useEffect } from "react";
import "./AddTaskForm.css"; 
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function AddTaskForm({ onClose, fetchTasks }){
    const [taskName, setTaskName] = useState("");
    const [taskPriority, setTaskPriority] = useState("");
    const [taskDeadline, setTaskDeadline] = useState("");
    const [taskStatus, setTaskStatus] = useState("");   
    const [taskOwner, setTaskOwner] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        tempErrors.taskName = taskName ? "" : "Field required";
        tempErrors.taskPriority = taskPriority ? "" : "Field required";
        tempErrors.taskDeadline = taskDeadline ? "" : "Field required";
        tempErrors.taskStatus = taskStatus ? "" : "Field required";
        tempErrors.taskOwner = taskOwner ? "" : "Field required";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleInputChange = (setterFunction, field) => (e) => {
        setterFunction(e.target.value);
        setErrors({ ...errors, [field]: "" });
    };

    async function createTaskForm(e) {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("Error creating task, check fields");
            return;
        }
        try {
            const token = localStorage.getItem('token');
            let res = await axios.post("http://localhost:3000/hh/create", 
                { taskName, taskPriority, taskDeadline, taskStatus, taskOwner },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.success("Task successfully created");
            onClose();
            await fetchTasks();
        } catch (error) {
            console.error("Error adding task", error);
            toast.error("Error creating a task, check fields");
        }
    }

    return(
        <div>
           <Toaster />
            <div>
                <h1 className="add-title">Add A Task</h1>
            </div>
             <form className="add-form" onSubmit={createTaskForm}>
                <input 
                    type="text" 
                    value={taskName} 
                    onChange={handleInputChange(setTaskName, 'taskName')} 
                    placeholder="What is the task?"
                    style={{ borderColor: errors.taskName ? "red" : "" }}
                />
                        {errors.taskName && <div className="error-message">{errors.taskName}</div>}
                <select 
                    value={taskPriority} 
                    onChange={handleInputChange(setTaskPriority, 'taskPriority')}
                    style={{ borderColor: errors.taskPriority ? "red" : "" }}>
                        <option hidden value="prompt">What is the priority of this task?</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                </select>
                        {errors.taskPriority && <div className="error-message">{errors.taskPriority}</div>}
                <input 
                    type="date" 
                    value={taskDeadline} 
                    onChange={handleInputChange(setTaskDeadline, 'taskDeadline')}
                    placeholder="When is this task due?" 
                    style={{ borderColor: errors.taskDeadline ? "red" : "" }}
                />
                        {errors.taskDeadline && <div className="error-message">{errors.taskDeadline}</div>}
                <select 
                    value={taskStatus} 
                    onChange={handleInputChange(setTaskStatus, 'taskStatus')}
                    style={{ borderColor: errors.taskStatus ? "red" : "" }}>
                        <option hidden value="prompt">What is the status of the task?</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                </select>
                        {errors.taskStatus && <div className="error-message">{errors.taskStatus}</div>}
                <input 
                    type="text" 
                    value={taskOwner} 
                    onChange={(e) => setTaskOwner(e.target.value)} 
                    placeholder="Who is responsible for this task?"
                    style={{ borderColor: errors.taskOwner ? "red" : "" }}
                />
                        {errors.taskOwner && <div className="error-message">{errors.taskOwner}</div>}
                <div className="form-buttons">
                    <button type="button" onClick={onClose}>Cancel</button>
                    <button type="submit">Add Task</button>
                </div>
            </form>
        </div>
    )
}


export default AddTaskForm;