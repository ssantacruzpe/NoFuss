import React, { useState } from "react";
import "./WelcomePage.css"; 
import TaskBoard from "./TaskBoard"



function WelcomePage(){

    return(
        <div>
            <h1>Welcome</h1>
            <TaskBoard/>
            <h2>test</h2>
        </div>
    )
}


export default WelcomePage;