import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HHprojectPage.css"; 
import AddTaskBtn from "./AddTaskBtn";
import TaskBoard from "./TaskBoard";


function HHprojectPage(){

    

    return(
        <div>
            <h1>Welcome</h1>
            <button>Get all tasks</button>
            <AddTaskBtn/>
            <TaskBoard/>
        </div>
    )
}


export default HHprojectPage;