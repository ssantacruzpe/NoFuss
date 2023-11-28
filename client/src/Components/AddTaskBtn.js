import React, { useState } from "react";
import "./AddTaskBtn.css"; 
import AddTaskForm from "./AddTaskForm";

function AddTaskBtn({ fetchTasks }){
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <div>
      <button onClick={openForm} className="add-task-btn">
        Add New Task
      </button>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeForm}>&times;</span>
            <AddTaskForm onClose={closeForm} fetchTasks={fetchTasks} />
          </div>
          <div className="modal-overlay" onClick={closeForm}></div>
        </div>
      )}
    </div>
  );
}

export default AddTaskBtn;