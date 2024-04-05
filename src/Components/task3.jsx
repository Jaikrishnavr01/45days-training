import React, { useState } from 'react';

const Task3 = () => {
    const [currency1, setCurrency1] = useState('inr');
    const [currency2, setCurrency2] = useState('inr');
    const [inp1, setInp1] = useState('');
    const [inp2, setInp2] = useState('');


    const changeInp1 = (e) => {
        setInp1(e.target.value);
        if (currency1 === 'inr' && currency2 === 'inr') {
            setInp2(e.target.value);
        } else if (currency1 === 'inr' && currency2 === 'usd') {
            setInp2(e.target.value / 83.35);
        } else if (currency1 === 'inr' && currency2 === 'aed') {
            setInp2(e.target.value / 22.35);
        } else if (currency1 === 'usd' && currency2 === 'inr') {
            setInp2(e.target.value * 83.35);
        } else if (currency1 === 'usd' && currency2 === 'usd') {
            setInp2(e.target.value);
        } else if (currency1 === 'usd' && currency2 === 'aed') {
            setInp2(e.target.value / 3.67);
        } else if (currency1 === 'aed' && currency2 === 'inr') {
            setInp2(e.target.value * 22.35);
        } else if (currency1 === 'aed' && currency2 === 'usd') {
            setInp2(e.target.value * 3.67);
        } else if (currency1 === 'aed' && currency2 === 'aed') {
            setInp2(e.target.value);
        }
    };

    const changeInp2 = (e) => {
        setInp2(e.target.value);
        if (currency2 === 'inr' && currency1 === 'inr') {
            setInp1(e.target.value);
        } else if (currency2 === 'inr' && currency1 === 'usd') {
            setInp1(e.target.value * 83.35);
        } else if (currency2 === 'inr' && currency1 === 'aed') {
            setInp1(e.target.value * 22.35);
        } else if (currency2 === 'usd' && currency1 === 'inr') {
            setInp1(e.target.value / 83.35);
        } else if (currency2 === 'usd' && currency1 === 'usd') {
            setInp1(e.target.value);
        } else if (currency2 === 'usd' && currency1 === 'aed') {
            setInp1(e.target.value * 3.67);
        } else if (currency2 === 'aed' && currency1 === 'inr') {
            setInp1(e.target.value / 22.35);
        } else if (currency2 === 'aed' && currency1 === 'usd') {
            setInp1(e.target.value / 3.67);
        } else if (currency2 === 'aed' && currency1 === 'aed') {
            setInp1(e.target.value);
        }
    };

    return (
        <div>
            <select name="" id="" value={currency1} onChange={(e) => setCurrency1(e.target.value)}>
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="aed">AED</option>
            </select>
            <input type="text" value={inp1} onChange={changeInp1} />

            <br /><br />

            <select name="" id="" value={currency2} onChange={(e) => setCurrency2(e.target.value)}>
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="aed">AED</option>
            </select>
            <input type="text" value={inp2} onChange={changeInp2} />
        </div>
    );
};

export default Task3;