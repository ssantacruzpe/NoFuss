import "./TaskBoard.css"; 
import TaskBox from "./TaskBox";


function TaskBoard({tasks}){

 

  return (
    <div>
        <h1>Welcome</h1>
        <TaskBox tasks={tasks}/>
    </div>
  );
};

export default TaskBoard;