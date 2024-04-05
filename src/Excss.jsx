import React, { useState } from 'react';
import './Excss.css';

const Excss = (props) => {


  const onChange = () => {
    const newStyle = props.theme === 'light' ? 'dark' : 'light';
    props.setTheme(newStyle);

  };

  return ( 
    <div className={props.theme}>
      <h1>header1</h1>
      <button onClick={onChange}>Change the theme</button>
    </div>
  );
};

export default Excss;
