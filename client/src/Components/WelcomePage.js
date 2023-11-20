import "./WelcomePage.css"; 
import PendingTasksBox from "./PendingTasksBox"
import NavBar from "./NavBar";



function WelcomePage(){

    return(
        <div>
            <NavBar/>
            <PendingTasksBox/>
        </div>
    )
}


export default WelcomePage;