import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import "./InProgressData.css";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    PieController
  } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, PieController);

function InProgressData() {
    const [highPriorityCount, setHighPriorityCount] = useState(0);
    const [mediumPriorityCount, setMediumPriorityCount] = useState(0);
    const [lowPriorityCount, setLowPriorityCount] = useState(0);
    const [totalInProgressTasks, setTotalInProgressTasks] = useState(0); 

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
            const inprogressTasks = tasks.filter(task => task.taskStatus === "In Progress");

            setTotalInProgressTasks(inprogressTasks.length);

            const highPriorityTasks = inprogressTasks.filter(task => task.taskPriority === "High").length;
            const mediumPriorityTasks = inprogressTasks.filter(task => task.taskPriority === "Medium").length;
            const lowPriorityTasks = inprogressTasks.filter(task => task.taskPriority === "Low").length;

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
        <div className="in-progress-container">
            <div className="in-progress-section">
                <div className='left-data-side'>
                    <h2>In Progress</h2>
                    <div className="number-tasks-ip">
                        <p className="number-data-ip">{totalInProgressTasks}</p> 
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

export default InProgressData;