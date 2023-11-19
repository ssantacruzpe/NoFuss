import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HHprojectPage.css"; 
import AddTaskBtn from "./AddTaskBtn";
import TaskBoard from "./TaskBoard";
import TaskBox from "./TaskBox";


function HHprojectPage(){

    const [tasks, setTasks] = useState([]);
    const getAllTasks = () => {
      try {
          axios
              .get("http://localhost:3000/hh/tasks")
              .then((res) => {
                setTasks(res.data);
                 console.log(tasks);
              })
              .catch((err) => console.log(err));
        } catch(error){
          console.log(error);
        }
      };
      useEffect(() => { 
        getAllTasks ();
      }, []);

    return(
        <div>
            <button onClick={getAllTasks}>get them all</button>
            <AddTaskBtn/>
            <TaskBoard getAllTasks={getAllTasks}/>
            <TaskBox tasks={tasks}/>
        </div>
    )
}


export default HHprojectPage;