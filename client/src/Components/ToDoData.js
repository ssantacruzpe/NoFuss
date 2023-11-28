import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import "./ToDoData.css";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    PieController
  } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, PieController);

function ToDoData() {
    const [highPriorityCount, setHighPriorityCount] = useState(0);
    const [mediumPriorityCount, setMediumPriorityCount] = useState(0);
    const [lowPriorityCount, setLowPriorityCount] = useState(0);
    const [totalToDoTasks, setTotalToDoTasks] = useState(0); 

    useEffect(() => {
        fetchTaskCounts();
    }, []);

    const fetchTaskCounts = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get("http://localhost:3000/hh/tasks", {
                headers: { Authorization: `Bearer ${token}` }
            });
            const tasks = response.data.tasks;
            const todoTasks = tasks.filter(task => task.taskStatus === "To Do");

            setTotalToDoTasks(todoTasks.length);

            const highPriorityTasks = todoTasks.filter(task => task.taskPriority === "High").length;
            const mediumPriorityTasks = todoTasks.filter(task => task.taskPriority === "Medium").length;
            const lowPriorityTasks = todoTasks.filter(task => task.taskPriority === "Low").length;

            setHighPriorityCount(highPriorityTasks);
            setMediumPriorityCount(mediumPriorityTasks);
            setLowPriorityCount(lowPriorityTasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const data = {
        labels: ["High", "Medium", "Low"],
        datasets: [{
            label: "Task Priority Distribution",
            data: [highPriorityCount, mediumPriorityCount, lowPriorityCount],
            backgroundColor: [
                "#E1929A",
                "#D48D49",
                "#49c8d4"
            ],
            
        }]
    };

    return (
        <div className="to-do-container">
            <div className="to-do-section">
                <div className='left-data-side'>
                    <h2>To Do</h2>
                    <div className="number-tasks-todo">
                        <p className="number-data-todo">{totalToDoTasks}</p> 
                        <p className="tasks">Tasks</p>
                    </div>
                </div>
                <div>
                    <Pie data={data} />
                </div>
            </div>
        </div>
    );
}

export default ToDoData;

