import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    function login () {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }

    useEffect(() => {
        login()
    }, []);

    return (
        <div>
            <h2>Login</h2>
        </div>
    );
}

export default Login;