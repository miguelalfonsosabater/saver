import React, { useEffect } from "react";
import "./UserLogin.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Lottie from 'lottie-react'
import LoginLottie from '../assets/userlottiewhite.json'

const UserLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userStorage = localStorage.getItem("userId");

    useEffect(() => {
        // If user is still loggedin, redirect to admin page
        if (userStorage) {
            navigate("/emergency-form");
            window.location.reload()
        }
    }, [])


    const loginEventHandler = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "http://localhost:8080/api/v1/users/login",
            data: {
                email,
                password,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                localStorage.setItem("userId", result.data.id);
                alert(result.data.status);
                navigate("/emergency-form");
                window.location.reload(false);
            })
            .catch((error) => {
                alert(error.response.data.status);
                setEmail("");
                setPassword("");
            });
    };

    return (
        <div className="user-login-page">

            <div className="loginLottieContainer">
                <Lottie
                    animationData={LoginLottie}
                    loop={true}
                    speed={0.2}
                />

            </div>

            <section >
                <form
                    className="user-login-form-container"
                    onSubmit={(e) => loginEventHandler(e)}
                >
                    <label className="user-login-form-header">USER LOGIN</label>

                    <div>
                        <input
                            className="user-login-input-email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            required
                            type="text"
                            value={email}
                        />
                    </div>

                    <div>
                        <input
                            className="user-login-input-password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="password"
                            autoComplete="on"
                            required
                            type="password"
                            value={password}
                        />
                    </div>

                    <div>
                        <button className="user-login-button" type="submit">
                            LOGIN
                        </button>
                    </div>

                    <div>
                        Don't have an account?{" "}
                        <Link to="/user-register"> Register </Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UserLogin;
