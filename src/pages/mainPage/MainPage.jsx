import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function MainPage() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate();

    if (count === 10) {
        navigate('/login')
    }

    function increment () {
    setCount(count + 1)
    }

    function reset () {
    setCount(0)
    }

    return (
        <div>
            <h2>Main Page</h2>
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Count</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default MainPage;