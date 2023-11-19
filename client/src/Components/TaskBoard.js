import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TaskBoard.css"; 

function TaskBoard() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      const fetchTasks = async () => {
          try {
              const response = await axios.get("http://localhost:3000/hh/tasks");
              setTasks(response.data.tasks);
          } catch (error) {
              console.error("Error fetching tasks:", error);
          }
      };
      fetchTasks();
  }, []);

  const filterTasksByStatus = (status) => {
    return tasks.filter(task => task.taskStatus === status);
}
return (
  <div className="task-board">
      <div className="column">
          <h2>To Do</h2>
          {filterTasksByStatus("To Do").map(task => (
              <div key={task._id} className="task-square">
                  <h3>{task.taskName}</h3>
                  <p>Deadline: {new Date(task.taskDeadline).toLocaleDateString()}</p>
                  <p>Owner: {task.taskOwner}</p>
              </div>
          ))}
      </div>
      <div className="column">
          <h2>In Progress</h2>
          {filterTasksByStatus("In Progress").map(task => (
              <div key={task._id} className="task-square">
                  <h3>{task.taskName}</h3>
                  <p>Deadline: {new Date(task.taskDeadline).toLocaleDateString()}</p>
                  <p>Owner: {task.taskOwner}</p>
              </div>
          ))}
      </div>
      <div className="column">
          <h2>Done</h2>
          {filterTasksByStatus("Done").map(task => (
              <div key={task._id} className="task-square">
                  <h3>{task.taskName}</h3>
                  <p>Deadline: {new Date(task.taskDeadline).toLocaleDateString()}</p>
                  <p>Owner: {task.taskOwner}</p>
              </div>
          ))}
      </div>
  </div>
);
}


export default TaskBoard;