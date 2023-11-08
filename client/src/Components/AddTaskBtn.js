import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddTaskBtn.css"; 
import AddTaskForm from "./Components/AddTaskForm";

function AddTaskBtn(){

    return(
        <div>
            <h1>Welcome</h1>
            <AddTaskForm/>
        </div>
    )
}


export default AddTaskBtn;