import "./TaskBox.css"; 

function TaskBox({ tasks }) {
    return (
        <div>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <div key={task._id} className="taskBox">
                        <h2>{task.taskName}</h2>
                        <h3>{task.taskDeadline}</h3>
                        <h3>{task.taskOwner}</h3>
                    </div>
                ))
            ) : (
                <p>No tasks available.</p>
            )}
        </div>
    );
}
  
  export default TaskBox;