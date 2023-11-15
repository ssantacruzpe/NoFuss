import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskBoard.css"; 
import TaskBox from "./TaskBox";


function TaskBoard({}){
  const [tasks, setTasks] = useState([]);
  const getAllTasks = () => {
    try {
        axios
            .get("http://localhost:3000/hh/tasks")
            .then((res) =>{
                setTasks(res.data);
                console.log(tasks);
            })
            .catch((err) => console.log(err));
    } catch(error){
        console.log(error);
    }
};
  useEffect(() => {
    getAllTasks();
}, []);

  return (
    <div>
        <h1>Welcome</h1>
        <button onClick={getAllTasks}>Get all of theeeem</button>
    </div>
  );
};

export default TaskBoard;