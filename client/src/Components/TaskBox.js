import "./TaskBox.css"; 

function TaskBox({ tasks }) {

    return (
        <div>

          
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task._id} className="taskBox">
                <span>{task.taskName}</span>
                <span>{task.taskDeadline}</span>
                <span>{task.taskOwner}</span>
              </div>
            ))
          ) : (
            <p>No tasks available.</p>
          )}
        </div>
      );
    }

  
  export default TaskBox;