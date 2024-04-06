import React, { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (e) => {
        if (e === '=') {
            setInput(eval(input));
        } else if (e === 'clear') {
            setInput('');
        } else if (e === 'delete') {
            setInput(input.toString().slice(0,-1));
        } else {
            setInput(input + e);
        }
    };

    return (
        <div  className='container'> 
            <div style={{width:"200px",margin:"auto"}}>
        <div>
            <input className='input' type="text" readOnly value={input}  />
        </div> <br />
        <div>
            <input type="button" value="1" onClick={() => handleClick('1')} />
            <input type="button" value="2" onClick={() => handleClick('2')} />
            <input type="button" value="3" onClick={() => handleClick('3')} /><br />
            <input type="button" value="4" onClick={() => handleClick('4')} />
            <input type="button" value="5" onClick={() => handleClick('5')} />
            <input type="button" value="6" onClick={() => handleClick('6')} /><br />
            <input type="button" value="7" onClick={() => handleClick('7')} />
            <input type="button" value="8" onClick={() => handleClick('8')} />
            <input type="button" value="9" onClick={() => handleClick('9')} /><br />
            <input type="button" value="0" onClick={() => handleClick('0')} /><br /><br />
            <input type="button" value="+" onClick={() => handleClick('+')} />
            <input type="button" value="-" onClick={() => handleClick('-')} />
            <input type="button" value="/" onClick={() => handleClick('/')} />
            <input type="button" value="*" onClick={() => handleClick('*')} />
            <input type="button" value="=" onClick={() => handleClick('=')} />
            <input type="button" value="clear" onClick={() => handleClick('clear')} />
            <input type="button" value="delete" onClick={() => handleClick('delete')} />
        </div>
    </div>

        </div>
       
    );
};

export default Calculator;
