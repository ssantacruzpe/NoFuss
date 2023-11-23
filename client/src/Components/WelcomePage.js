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
        <PendingTasksBox/>
        <div className="pie-chart-container">
                <PieChart />
        </div>
    </div>
    );
}


export default WelcomePage;