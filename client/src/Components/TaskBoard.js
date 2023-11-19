import "./TaskBoard.css"; 
import TaskBox from "./TaskBox";


function TaskBoard({tasks, getAllTasks}){

  return (
    <div>
        <h1>Welcome</h1>
        <TaskBox tasks={tasks} getAllTasks ={getAllTasks}/>
    </div>
  );
};

export default TaskBoard;