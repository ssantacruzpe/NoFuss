import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PendingTasksBox.css"; 

function PendingTasksBox() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:3000/hh/tasks");
            const inProgressTasks = response.data.tasks.filter(task => task.taskStatus === "In Progress");
            setTasks(inProgressTasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    return (
        <div className="in-progress-tasks-container">
            <div className="tasks-box">
            <h1>To Do Tasks</h1>
                <div className="column">
                    <h3>Task Name</h3>
                    {tasks.map(task => (
                        <p key={task._id}>{task.taskName}</p>
                    ))}
                </div>
                <div className="column">
                    <h3>Task Owner</h3>
                    {tasks.map(task => (
                        <p key={task._id}>{task.taskOwner}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PendingTasksBox;
