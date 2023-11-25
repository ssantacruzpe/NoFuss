import "./WelcomePage.css"; 
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
            <div className="data-section">
                <div className="to-do-section">
                    <h2>To Do Tasks</h2>
                    <p>Chart#</p>
                    <h3>Priority</h3>
                </div>
                    <div className="pie-chart-container">
                            <PieChart />
                    </div>
                <div className="in-progress-section">
                    <h2>In Progress Tasks</h2>
                    <p>Chart#</p>
                    <h3>Priority</h3>
                </div>
            </div>
            <button>Review Board</button>
        </div>
    </div>
    );
}


export default WelcomePage;