import "./WelcomePage.css"; 
import PendingTasksBox from "./PendingTasksBox"
import NavBar from "./NavBar";
import PieChart from "./PieChart";
import TopBar from "./TopBar";



function WelcomePage(){

    return (
        <div>
        <NavBar/>
        <TopBar/>
        <div className="welcome-body">
            <h1 className="welcome-title">Dashboard</h1>
            <div className="pie-chart-container">
                    <PieChart />
            </div>
        </div>
    </div>
    );
}


export default WelcomePage;