import React from "react";
import "./SignUpPage.css"; 

function SignUpPage(){
    return(
        <div className="sign-up">
            <div className="left-side-sign-up">
            <div className="nofuss-title">
                <h1>NoFuss</h1>
            </div>
        <div className="form-container">
            <div className="sign-up-title">
                <h2>Sign Up</h2>
            </div>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Log In</button>
                <span>or, <a href="#signup">signUp</a></span>
            </form>
            </div>
        </div>
        <div className="image-container">
            <img src="https://cdn-icons-png.flaticon.com/512/4593/4593618.png" alt="landingImage" />
        </div>
    </div>
    );
}

export default SignUpPage;