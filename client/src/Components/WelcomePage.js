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
            <div className="middle-body">
                <div className="data-section">
                    <div className="to-do-section">
                    <ToDoData/>
                    </div>
                    <div className="in-progress-section">
                        <InProgressData/>
                    </div>
                </div>
                <div className="right-side-msg">
                    <div className="text-right-side">
                        <span>Let's get things done!</span>
                    </div>
                    <div className="image-right-side">
                        <img src="https://static.vecteezy.com/system/resources/previews/027/669/113/original/happy-woman-raising-hands-up-semi-flat-color-character-girl-overwhelmed-with-happiness-editable-half-body-person-on-white-simple-cartoon-spot-illustration-for-web-graphic-design-vector.jpg" alt="hands-up"></img>
                    </div>
                    <div className="right-button-text">
                        <span><a href="http://localhost:3001/hh">Review Board</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default WelcomePage;