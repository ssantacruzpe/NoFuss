import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HHprojectPage.css";
import AddTaskBtn from "./AddTaskBtn";
import TaskBoard from "./TaskBoard";
import FilterOwner from "./FilterOwner";
import SearchFilter from "./SearchFilter";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

function HHprojectPage() {
    const [tasks, setTasks] = useState([]);
    const [selectedOwner, setSelectedOwner] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:3000/hh/tasks", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` 
                }
            });
            setTasks(response.data.tasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const updateTasks = (newTasks) => {
        setTasks(newTasks);
    };

    const getUniqueOwners = () => {
        const owners = tasks.map(task => task.taskOwner);
        return [...new Set(owners)];
    };

    const handleOwnerSelect = (owner) => {
        setSelectedOwner(owner);
    };

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const filteredTasks = tasks.filter(task => {
        const matchesOwner = selectedOwner === "" || task.taskOwner === selectedOwner;
        const matchesSearch = searchQuery === "" || task.taskName.toLowerCase().includes(searchQuery);
        return matchesOwner && matchesSearch;
    });

    return (
        <div>
            <NavBar/>
            <TopBar/>
            <div className="container">
                <h2 className="board-title">My Board</h2>
                <div className="useful-buttons">
                    <div><AddTaskBtn /></div>
                    <div><SearchFilter onSearch={handleSearch} /></div>
                    <div><FilterOwner owners={getUniqueOwners()} onOwnerSelect={handleOwnerSelect} /></div>
                </div>
            </div>
            <TaskBoard tasks={filteredTasks} updateTasks={updateTasks}/>
        </div>
    );
    
}

export default HHprojectPage;

