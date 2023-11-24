import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TaskBoard.css";

function TaskBoard({ tasks, updateTasks }) {
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
            const token = localStorage.getItem('token');
            const response = await axios.get("http://localhost:3000/hh/tasks", {
                headers: { Authorization: `Bearer ${token}` }
            });
            updateTasks(response.data.tasks);
        } catch (error) {
            console.error("Error fetching tasks:", error.response || error);
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

    const onDragStart = (e, task) => {
        e.dataTransfer.setData("task_id", task._id);
        e.dataTransfer.effectAllowed = "move";
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };
    
    const onDrop = (e, newStatus) => {
        const taskId = e.dataTransfer.getData("task_id");
        const taskToUpdate = tasks.find(task => task._id === taskId);
        updateTaskStatus(taskToUpdate, newStatus);
    };
    
    const updateTaskStatus = async (task, newStatus) => {
        try {
            await axios.put(`http://localhost:3000/hh/${task._id}`, { ...task, taskStatus: newStatus });
            fetchTasks();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const countTasks = (status) => {
        return tasks.filter(task => task.taskStatus === status).length;
    };

    const renderTaskSquare = (task) => {
        const deadline = new Date(task.taskDeadline);
        const now = new Date();
        const isOverdue = (task.taskStatus === "To Do" || task.taskStatus === "In Progress") && new Date(deadline.setDate(deadline.getDate() + 1)) < now;
        const taskSquareClass = `task-square ${isOverdue ? 'overdue' : ''}`;

        return (
                <div key={task._id} className={taskSquareClass} draggable onDragStart={(e) => onDragStart(e, task)}>
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
            <div key={status} className="column" onDragOver={onDragOver} onDrop={(e) => onDrop(e, status)}>
                <div className="column-header">
                        <h2>{status}</h2>
                        <div className="task-count">{countTasks(status)}</div>
                    </div>
                    <hr className={`status-underline ${status.toLowerCase().replace(" ", "-")}`}/>
                    {tasks.filter(task => task.taskStatus === status).map(renderTaskSquare)}
            </div>
        ))}

        {showUpdatePopup && (
                <div className="popup">
                    <div className="popup-content-update">
                        <h3>Update Task</h3>
                        {selectedTask && (
                            <>
                            <div className="update-box">
                                <p>What is the task?
                                    <input 
                                        type="text" 
                                        value={updatedTaskName} 
                                        onChange={(e) => setUpdatedTaskName(e.target.value)} 
                                    />
                                </p>
                                <p>When is this task due?
                                    <input  
                                        type="date" 
                                        value={updatedTaskDeadline} 
                                        onChange={(e) => setUpdatedTaskDeadline(e.target.value)} 
                                    />
                                </p>
                                <p>What is the status of the task?
                                    <select 
                                        value={updatedTaskStatus} 
                                        onChange={(e) => setUpdatedTaskStatus(e.target.value)}>
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </p>
                                <p>Who is responsible for this task?
                                    <input 
                                        type="text" 
                                        value={updatedTaskOwner} 
                                        onChange={(e) => setUpdatedTaskOwner(e.target.value)} 
                                    />
                                </p>
                                </div>
                            </>
                        )}
                        <div className="update-buttons">
                            <button onClick={() => setShowUpdatePopup(false)}>Cancel</button>
                            <button onClick={updateTask}>Save</button>
                        </div>
                    </div>
                </div>
            )}

        {showDeletePopup && (
              <div className="popup">
                  <div className="popup-content-delete">
                      <h3>Are you sure you want to delete this task?</h3>
                      <div className="delete-buttons">
                        <button onClick={() => setShowDeletePopup(false)}>Cancel</button>
                        <button onClick={deleteTask}>Confirm</button>
                      </div>
                  </div>
              </div>
            )}
        </div>
    );
}

export default TaskBoard;
