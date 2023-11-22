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
            const response = await axios.get("http://localhost:3000/hh/tasks");
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
        labels: ['To Do', 'In Progress'],
        datasets: [{
            label: 'Task Status Distribution',
            data: [todoCount, inProgressCount],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
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
