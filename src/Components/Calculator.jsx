import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input));
            } catch (error) {
                setInput('Error');
            }
        } else if (value === 'clear') {
            setInput('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div>
            <div>
                <input type="text" value={input} readOnly />
            </div>
            <div>
                <input type="button" value="1" onClick={() => handleClick('1')} />
                <input type="button" value="2" onClick={() => handleClick('2')} />
                <input type="button" value="3" onClick={() => handleClick('3')} />
                <input type="button" value="4" onClick={() => handleClick('4')} /><br />
                <input type="button" value="5" onClick={() => handleClick('5')} />
                <input type="button" value="6" onClick={() => handleClick('6')} />
                <input type="button" value="7" onClick={() => handleClick('7')} />
                <input type="button" value="8" onClick={() => handleClick('8')} /><br />
                <input type="button" value="9" onClick={() => handleClick('9')} />
                <input type="button" value="0" onClick={() => handleClick('0')} /><br /><br />
                <input type="button" value="+" onClick={() => handleClick('+')} />
                <input type="button" value="-" onClick={() => handleClick('-')} />
                <input type="button" value="/" onClick={() => handleClick('/')} />
                <input type="button" value="*" onClick={() => handleClick('*')} />
                <input type="button" value="=" onClick={() => handleClick('=')} />
                <input type="button" value="clear" onClick={() => handleClick('clear')} />
            </div>
        </div>
    );
};

export default Calculator;
