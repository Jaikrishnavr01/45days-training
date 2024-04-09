import React, { useEffect, useState } from 'react';

const Task7 = () => {
    const [count, setCount] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);
    const [previousCount, setPreviousCount] = useState(0);
    useEffect(() => {
        let timer;

        if (isRunning && count > 0) { 
            timer = setInterval(() => {
                setCount(prev => prev - 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [count, isRunning]);

    const toggleInput = () => {
        setIsRunning(!isRunning);
    };

    const resetfun = (e) => {
        setCount(previousCount) 
        setIsRunning(false); 
    };

    const handleInputChange = (e) => {
        const newValue = Number(e.target.value);
        setCount(newValue);
        setPreviousCount(newValue); 
    };
    

    return (
        <div>
            <h1>Timer - {count}</h1>
            {count === 0 && <h3>Time's up!</h3>}
            <input 
                type="number" 
                onChange={handleInputChange}  
                disabled={isRunning} 
            />
            <button onClick={toggleInput}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={resetfun}>Reset</button>
        </div>
    );
};

export default Task7;
