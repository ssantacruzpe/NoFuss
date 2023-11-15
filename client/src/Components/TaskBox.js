import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TaskBox.css"; 

function TaskBox({tasks}){
    const [taskInfo, setTaskInfo] = useState({
        taskName:"",
        taskDeadline:"",
        taskStatus:"",
        taskOwner:"",
    });
  
const handleInputsChange = (evt) =>{
    const value = evt.target.value;
    setTaskInfo({
        ...taskInfo,
        [evt.target.name]: value,
    });
    console.log(taskInfo);
};
    return (
        <div>
            {tasks.map((task)=> (
                <div className="taskBox">
                <h1>{task.taskName}</h1>
                <h2>{task.taskDeadline}</h2>
                <h2>{task.taskOwner}</h2>
             </div>
            ))}
    </div>
    );
  };
  
  
  export default TaskBox;