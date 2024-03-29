import React, { useState } from "react";
import "./SignUpPage.css"; 
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/landing/register", { userName, email, password });
            if (res.status === 200) {
                toast.success(res.data.msg);
                navigate("/login");
            } else {
                toast.error(res.data.msg);
            }
        } catch (err) {
            toast.error("Sign up failed, all fields are required");
        }
    }

    return (
        <div className="sign-up">
            <Toaster />
            <div className="left-side-sign-up">
                <div className="nofuss-title">
                    <h1>NoFuss</h1>
                </div>
                <div className="form-container">
                    <div className="sign-up-title">
                        <h2>Sign Up</h2>
                    </div>
                    <form className="form-signup" onSubmit={handleRegister}>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Name" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <div className="password-input">
                            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                            </span>
                        </div>
                        <button type="submit">Sign Up</button>
                        <div className="button-text">
                            <span>Or, <a href="http://localhost:3001/login">Log In</a></span>
                        </div>
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
