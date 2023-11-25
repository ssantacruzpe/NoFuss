import "./WelcomePage.css"; 
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import ToDoData from "./ToDoData";
import InProgressData from "./InProgressData";



function WelcomePage(){

    return (
        <div>
        <NavBar/>
        <TopBar/>
        <div className="welcome-body">
            <h1 className="welcome-title">Overview</h1>
            <div className="data-section">
                <div className="to-do-section">
                   <ToDoData/>
                </div>
                <div className="in-progress-section">
                    <InProgressData/>
                </div>
            </div>
            <button>Review Board</button>
        </div>
    </div>
    );
}


export default WelcomePage;