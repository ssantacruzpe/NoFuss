import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; 

function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e){
        try{
            e.preventDefault();
            let res = await axios.post("http://localhost:3000/landing/login", {email, password});
            console.log(res.data);
            if (res.status === 200){
                localStorage.setItem("token", res.data.token);
                navigate("/welcome");
            }
        } catch (err){
            alert("Log in failed, check your email or password.");
        }
    }

    return(
        <div className="login">
            <div className="left-side-login">
            <div className="nofuss-title">
                <h1>NoFuss</h1>
            </div>
        <div className="form-container">
            <div className="login-title">
                <h2>Login</h2>
            </div>
            <form id="formLogin" onSubmit={handleLogin} value="LoginForm">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit">Log In</button>
                <span>or, <a href="#signup">Sign Up</a></span>
            </form>
            </div>
        </div>
        <div className="image-container">
            <img src="https://cdn-icons-png.flaticon.com/512/4593/4593618.png" alt="landingImage" />
        </div>
    </div>
    );
}

export default LoginPage;