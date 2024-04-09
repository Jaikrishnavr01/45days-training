import React, { useEffect, useState } from 'react';
import "../CSS/Style.css"

const Task6 = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    const resetTimer = () => {
        setCount(0);
        setIsRunning(false);
    };

    return (
        <div>
            <h1>Timer - <span>{count}</span></h1>
            <br />
            <div className='btn-class'>
                {isRunning ? (
                    <button onClick={() => setIsRunning(false)} className='btn'>Stop</button>
                ) : (
                    <button onClick={() => setIsRunning(true)} className='btn'>Start</button>
                )}
                <button onClick={resetTimer} className='btn2'>Reset Timer</button>
            </div>
        </div>
    );
};

export default Task6;
