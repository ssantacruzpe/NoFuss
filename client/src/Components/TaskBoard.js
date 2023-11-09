import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TaskBoard.css"; 

function TaskBoard(){

  return (
    <div>
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
  );
};

export default TaskBoard;