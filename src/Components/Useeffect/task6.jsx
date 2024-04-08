import React, { useEffect, useState } from 'react';
import "../CSS/Style.css"

const Task6 = () => {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState();
    const [btnText, setBtnText] = useState("Start");

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        setBtnText("Stop");
        setIntervalId(interval);

        return () => {
            clearInterval(interval);
        };
    }, []);


    const startTimer = () => {
        if (!intervalId) {
            const interval = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
            setIntervalId(interval);
            setBtnText("Stop");
        }
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setBtnText("Start");
        }
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        setIntervalId("")
        setCount(0);
        setBtnText("Start");
    };

    return (
        <div>
            <h1>Timer - <span>{count}</span></h1>
            <br />
            <div className='btn-class'>
            <button onClick={intervalId ? stopTimer : startTimer} className='btn'>{btnText}</button>
            <button onClick={resetTimer} className='btn2'>Reset Timer</button>
            </div>
        </div>
    );
};

export default Task6;
