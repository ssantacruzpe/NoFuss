import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import "./PieChart.css";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    PieController
  } from 'chart.js';
  ChartJS.register(ArcElement, Tooltip, Legend, PieController);


function PieChart() {
    const [todoCount, setTodoCount] = useState(0);
    const [inProgressCount, setInProgressCount] = useState(0);

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
            const todoTasks = tasks.filter(task => task.taskStatus === "To Do").length;
            const inProgressTasks = tasks.filter(task => task.taskStatus === "In Progress").length;
    
            setTodoCount(todoTasks);
            setInProgressCount(inProgressTasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const data = {
        labels: ["In Progress", "To Do"],
        datasets: [{
            label: "Task Status Distribution",
            data: [inProgressCount, todoCount],
            backgroundColor: [
                "rgba(255, 252, 220, 1)",
                "rgba(207, 203, 255, 1)",
            ],
            borderColor: [
                "rgba(255, 252, 220, 1)",
                "rgba(207, 203, 255, 1)",
            ],
            borderWidth: 1
        }]
    };

    return (
        <div>
            <Pie data={data} />
        </div>
    );
}

export default PieChart;
