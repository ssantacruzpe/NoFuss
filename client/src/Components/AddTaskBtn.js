import React, { useState } from "react";
import "./AddTaskBtn.css"; 
import AddTaskForm from "./AddTaskForm";

function AddTaskBtn(){
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div>
      <button onClick={toggleForm} className="add-task-btn">
        {showForm ? "Close Task Form" : "Add New Task"}
      </button>
      {showForm && <AddTaskForm />}
    </div>
  );
}

export default AddTaskBtn;