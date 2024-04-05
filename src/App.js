import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Cello from './Components/hi';
import Counter from './Components/Counter';
import Event from './Components/PropsMethod/Event';
import Task1 from './Components/Task1';
import Ifelse from './Components/ConditionalRendering/ifelse';
import Task2 from './Components/Task2';
import { useState } from 'react';
import Jsx from './Components/Jsx';
import Excss from './Excss';
import Inlinecss from './inlinecss';
import Module from './Components/Module';
import Task3 from './Components/task3';
import Calculator from './Components/Calculator';



function App() {
// alert("hello world")
const [togglebtn , setTogglebtn] = useState("ON")
const [theme , setTheme] = useState("light")
  return (
    <div className="App">
  {/* <h1>Welcome</h1> */}
{/* 
  
  <Hello name={"sai"} age={18}/>
  <Hello name={"siva"} age={29}>
    <p>i am a bad guy</p>
  </Hello>

  <Cello name={"jai"} age={18}/>

  <Cello name={"kumar"} age={81}>
    <p>this is kumar</p>
  </Cello>
  <br/>
  <hr/>
  <Event/>
<br/>
  <Counter/>

  <hr/>
  <Task1/>
  <Ifelse/>
//   <Task2 togglebtn={togglebtn} setTogglebtn={setTogglebtn} />*/}
{/* //   <Jsx/> 
// <Excss theme={theme} setTheme={setTheme}/>

// {/* <Excss theme={true}>  <Inlinecss/> <Module/><Task3/> */}

<Calculator/>
    </div>
  );
}

export default App;
