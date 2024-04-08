import React, { useEffect, useState } from 'react';

const Task6 = () => {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

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
        }
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId("");
        }

    };

    const ResetTimer = () => {
        setCount(0);
        clearInterval(intervalId);
        setIntervalId("");
    }

    return (
        <div>
            <h1>Timer - {count}</h1>
            <br />
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
            <button onClick={ResetTimer}>Reset Timer</button>
        </div>
    );
};

export default Task6;
