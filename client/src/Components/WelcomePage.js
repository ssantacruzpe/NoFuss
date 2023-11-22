import "./WelcomePage.css"; 
import PendingTasksBox from "./PendingTasksBox"
import NavBar from "./NavBar";
import PieChart from "./PieChart";



function WelcomePage(){

    return (
        <div>
        <NavBar/>
        <PendingTasksBox/>
        <div className="pie-chart-container">
                <PieChart />
        </div>
    </div>
    );
}


export default WelcomePage;