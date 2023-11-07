import React, { useState } from "react";
import "./SignUpPage.css"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpPage(){

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleRegister(e){
        e.preventDefault();
        let res = await axios.post("http://localhost:3000/landing/register", {userName, email, password});
        alert (res.data.msg);
        navigate("/login");

    }
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
            <form id="formSignUp" onSubmit={handleRegister} value="SignUpForm">
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Name"/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit">Sign Up</button>
                <span>or, <a href="#signup">Log In</a></span>   
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