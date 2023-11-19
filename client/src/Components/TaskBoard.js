import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TaskBoard.css";

function TaskBoard() {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [updatedTaskName, setUpdatedTaskName] = useState("");
    const [updatedTaskDeadline, setUpdatedTaskDeadline] = useState("");
    const [updatedTaskStatus, setUpdatedTaskStatus] = useState("");
    const [updatedTaskOwner, setUpdatedTaskOwner] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:3000/hh/tasks");
            setTasks(response.data.tasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const handleMenuClick = (task) => {
        setSelectedTask(task);
        setShowMenu(!showMenu);
    };

    const handleUpdateClick = () => {
      if (selectedTask) {
          setUpdatedTaskName(selectedTask.taskName);
          setUpdatedTaskDeadline(selectedTask.taskDeadline);
          setUpdatedTaskStatus(selectedTask.taskStatus); 
          setUpdatedTaskOwner(selectedTask.taskOwner);
      }
      setShowUpdatePopup(true);
      setShowMenu(false);
  };

    const handleDeleteClick = () => {
        setShowDeletePopup(true);
        setShowMenu(false);
    };

    const updateTask = async () => {
      try {
          const updatedTaskInfo = {
              taskName: updatedTaskName,
              taskDeadline: updatedTaskDeadline,
              taskStatus: updatedTaskStatus,
              taskOwner: updatedTaskOwner
          };
          await axios.put(`http://localhost:3000/hh/${selectedTask._id}`, updatedTaskInfo);
          fetchTasks();
          setShowUpdatePopup(false);
      } catch (error) {
          console.error("Error updating task:", error);
      }
  };

    const deleteTask = async () => {
        try {
            await axios.delete(`http://localhost:3000/hh/${selectedTask._id}`);
            fetchTasks();
            setShowDeletePopup(false);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const renderTaskSquare = (task) => {
        return (
            <div key={task._id} className="task-square">
                <h3>{task.taskName}</h3>
                <p>Deadline: {new Date(task.taskDeadline).toLocaleDateString()}</p>
                <p>Owner: {task.taskOwner}</p>
                <button className="menu-button" onClick={() => handleMenuClick(task)}>&#x22EE;</button>
                {showMenu && selectedTask._id === task._id && (
                    <div className="task-menu">
                        <button onClick={handleUpdateClick}>Update</button>
                        <button onClick={handleDeleteClick}>Delete</button>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="task-board">
            {["To Do", "In Progress", "Done"].map((status) => (
                <div key={status} className="column">
                    <h2>{status}</h2>
                    {tasks.filter(task => task.taskStatus === status).map(renderTaskSquare)}
                </div>
            ))}

        {showUpdatePopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Update Task</h3>
                        {selectedTask && (
                            <>
                                <input 
                                    type="text" 
                                    value={updatedTaskName} 
                                    onChange={(e) => setUpdatedTaskName(e.target.value)} 
                                />
                                <input 
                                    type="date" 
                                    value={updatedTaskDeadline} 
                                    onChange={(e) => setUpdatedTaskDeadline(e.target.value)} 
                                />
                                <select 
                                    value={updatedTaskStatus} 
                                    onChange={(e) => setUpdatedTaskStatus(e.target.value)}>
                                    <option value="To Do">To Do</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Done">Done</option>
                                </select>
                                <input 
                                    type="text" 
                                    value={updatedTaskOwner} 
                                    onChange={(e) => setUpdatedTaskOwner(e.target.value)} 
                                />
                            </>
                        )}
                        <button onClick={updateTask}>Save</button>
                        <button onClick={() => setShowUpdatePopup(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {showDeletePopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Are you sure you want to delete this task?</h3>
                        <button onClick={deleteTask}>Confirm</button>
                        <button onClick={() => setShowDeletePopup(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TaskBoard;