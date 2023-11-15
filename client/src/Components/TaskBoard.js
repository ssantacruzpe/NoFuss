import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TaskBoard.css"; 
import TaskBox from "./TaskBox";


function TaskBoard(){
  
  const [tasks, showTasks] = useState([]);
  const getAllTasks = () => {
      try {
          axios
              .get("http://localhost:3000/hh/tasks")
              .then((res)=>{
                  showTasks(res.data);
              })
              .catch((err) => console.log(err));
      } catch(error){
          console.log(error);
      }
  };

  return (
    <div>
        <h1>Welcome</h1>
        <button>Get all tasks</button>
        <TaskBox tasks={tasks}/>
    </div>
  );
};

export default TaskBoard;