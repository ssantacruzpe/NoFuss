import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TaskBoard.css"; 

function TaskBoard({getAllTasks, tasks}){
  
  const [newTask, setNewTask] = useState({
    taskName: "",
    taskDeadline: Date, 
    taskStatus: ["To Do", "In Progress", "Done"],
    taskOwner: "",
  });

  const [editTask, setEditTask] = useState({
    id: null,
    taskName: "",
    taskDeadline: Date, 
    taskStatus: ["To Do", "In Progress", "Done"],
    taskOwner: "",
  });

  async function deleteTask(id){
    try {
      await axios.delete(`http://localhost:3000/hh/${id}`);
      } catch (error){
        console.error("Error deleting task", error);
      }
      getAllTasks();
    }

  async function addTask(){
    try{
      await axios.post("http://localhost:3000/hh", newTask);
        setNewTask({
          taskName: "",
          taskDeadline: Date, 
          taskStatus: "",
          taskOwner: "", 
        });
        getAllTasks();
    } catch(error){
      console.error("Error adding product", error)
    }
  }

  async function updateTask(){
    try{
      await axios.put(`http://localhost:3000/hh/${editTask.id}`, {
        taskName: editTask.taskName,
        taskDeadline: editTask.taskDeadline,
        taskStatus: editTask.taskStatus,
        taskOwner: editTask.taskOwner
      });
      setEditTask({
        taskName: "",
        taskDeadline: "", 
        taskStatus: "",
        taskOwner: "",
      });
      getAllTasks();
    } catch(error){
      console.error("Error updating task", error);
    }
  }

  return (
    <div>
       
       {tasks.map((task) =>(
          <div key={task._id} className="taskCard">
            <div className="task">
              <span>{task.taskName}</span>
              <span>{task.taskDeadline}</span>
              <span>{task.taskStatus}</span>
              <span>{task.taskOwner}</span>
                <div className="buttonContainer">
                  <button onClick={() =>deleteTask(task._id)} className="deleteButton">
                    <span>delete</span>
                  </button>

                </div>

            </div>
        </div>
       ))}
    </div>
  );
};

export default TaskBoard;