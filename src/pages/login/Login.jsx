import React from 'react';
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    function login (e) {
        e.preventDefault();
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }


    return (
        <div>
            <h2>Login</h2>
            <button onClick={login}>Main</button>
        </div>
    );
}

export default Login;