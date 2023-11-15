import React, { useState } from "react";
import axios from "axios";
import "./TaskBox.css"; 

function TaskBox({tasks}){
   
    return (
        <div>
            {tasks.map((task)=> (
                <div key={task._id} className="taskBox">
                <h1>{task.taskName}</h1>
                <h2>{task.taskDeadline}</h2>
                <h2>{task.taskOwner}</h2>
             </div>
            ))}
    </div>
    );
  };
  
  
  export default TaskBox;