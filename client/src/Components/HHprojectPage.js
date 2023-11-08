import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HHprojectPage.css"; 

function HHprojectPage(){

    return(
        <div>
            <h1>Welcome</h1>
            <button>Add Task</button>
            <div class="task-columns">
                <div class="column" id="todo-column">
                    <h2>To Do</h2>
                </div>
                <div class="column" id="in-progress-column">
                    <h2>In Progress</h2>
                </div>
                <div class="column" id="done-column">
                    <h2>Done</h2>
                </div>
            </div>
        </div>
    )
}


export default HHprojectPage;