import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TaskBox.css"; 

function TaskBox(){
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h1>Task Name times</h1>
        <h2>By:Date</h2>
        <h2>Owner:Name</h2>
      </div>
    );
  };
  
  export default TaskBox;