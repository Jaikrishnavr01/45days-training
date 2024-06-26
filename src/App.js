import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Cello from './Components/hi';
import Counter from './Components/Counter';
import Event from './Components/PropsMethod/Event';
import Task1 from './Components/Task1';
import Ifelse from './Components/ConditionalRendering/ifelse';
import Task2 from './Components/Task2';
import React, { useReducer, useState } from 'react';
import Jsx from './Components/Jsx';
import Excss from './Excss';
import Inlinecss from './inlinecss';
import Module from './Components/Module';
import Task3 from './Components/task3';
import Calculator from './Components/Calculator';
import Task4 from './Components/Task4';
import Task5 from './Components/task5';
import CounterMounter from './Components/Useeffect/CounterMounter';
import CounterMountAndUnMount from './Components/Useeffect/CounterMountAndUnMount';
import Toggle from './Components/Useeffect/Toggle';
import SetTimer from './Components/Useeffect/SetTimer';
import SetTimer01 from './Components/Useeffect/SetTimer';
import SetInterval1 from './Components/Useeffect/SetInterval1';
import Greeting from './Components/Useeffect/Greeting';
import Task6 from './Components/Useeffect/task6';
import Task7 from './Components/task7';
import Fetchingfromserver from './Components/ApiAxios/Fetchingfromserver';
import CRDmethod from './Components/ApiAxios/CRDmethod';
import Navbar from './Components/Pages/Navbar';
import Reducer from './Components/Reduder/Reducer';
import A from './Components/UseContext/PropsDrilling/A';
import A1 from './Components/GlobalStateMangement/A';
import B1 from './Components/GlobalStateMangement/B';
import D1 from './Components/GlobalStateMangement/D';
import F1 from './Components/GlobalStateMangement/F';
import C1 from './Components/GlobalStateMangement/C';
import ReducerObj from './Components/ReducerUsingObject/ReducerObj';
import LoaderAnimation from './Components/LoaderAnimation/LoaderAnimation';
import Usecallback1 from './Components/Usecallbackcomp/Usecallback1';
import Parent1 from './Components/UseMemodemo/Parent1';
import Parentdemo from './Components/Useref/Parentdemo';
import Parentdemo1 from './Components/Useref/Parentdemo1';
import Task8 from './Components/Task8.jsx/Task8';
import Hooksdoctitle1 from './Components/Hooksdoctitle1';
import Hooksdoctitle2 from './Components/Hooksdoctitle2';
import Counter1Hoooks from './Components/Counter1Hoooks';
import Counter2Hoooks from './Components/Counter2Hoooks';
import ErrorHandling from './Components/Errorhandling/ErrorHandling';
import Product from './Components/Errorhandling/Product';
import Portal from './Components/ReactPortal/Portal';
import Counter01 from './Components/Hoc/Comp/Counter01';
import Counter02 from './Components/Hoc/Comp/Counter02';




export const userContext = React.createContext()
export const PasswordContext = React.createContext()


//global state management

export const CounterContext =  React.createContext();


function App() {

  const initialState = 0;
  const reducer = (state, action) => {
    switch(action){
      case 'inc': return state+1
      case 'dec': return state-1
      case 'reset': return initialState
      case 'return': return state

    }
  }

  const[count, dispatch] = useReducer(reducer, initialState)

// alert("hello world")
const [togglebtn , setTogglebtn] = useState("ON")
const [theme , setTheme] = useState("light")


return (
  <>
    <div className="App">
  {/* <h1>Welcome</h1> */}

{/*   
  <Hello name={"sai"} age={18}/>
  <Hello name={"siva"} age={29}>
    <p>i am a bad guy</p>
  </Hello>

 <Cello name={"jai"} age={18}/> */}

  {/* <Cello name={"kumar"} age={81}>
    <p>this is kumar</p>
  </Cello>
  <br/>
  <hr/> */}
 {/* <Event/> */}
 {/* <br/>
  <Counter/>

  <hr/>
  <Task1/>
  <Ifelse/>
//   <Task2 togglebtn={togglebtn} setTogglebtn={setTogglebtn} /> */}
{/* //   <Jsx/> 
// <Excss theme={theme} setTheme={setTheme}/>

// {/* <Excss theme={true}>  <Inlinecss/> <Module/><Task3/> */}

{/* <Calculator/> */}
{/* <Task5/> */}
{/* <CounterMounter/> */}
{/* <CounterMountAndUnMount/> */}
{/* <Toggle/> */}
{/* <SetTimer01/> */}
{/* <SetInterval1/> */}
{/* <Greeting/> */}
{/* <Task6/> */}

{/* <Task7/> */}


{/* <Fetchingfromserver/> */}

{/* <CRDmethod/> */}

{/* <userContext.Provider value={{"name" : "Adam", "age":10}}>

  <PasswordContext.Provider value={'abc@123'}>
    <A/>
    </PasswordContext.Provider>
</userContext.Provider>
<Reducer/> */}

{/* {count} */}
{/* <CounterContext.Provider value={{count:count,dispatch:dispatch}}>
  <A1/>
  <B1/>
  <C1/>
</CounterContext.Provider> */}
<Reducer/>
<ReducerObj/>
{/* <LoaderAnimation/> */}

{/* <Usecallback1/> */}
{/* <Parent1/>
<Parentdemo/> */}
{/* <Parentdemo1/> */}
<Task8/>



{/* <Hooksdoctitle1/>
<Hooksdoctitle2/> */}


{/* <Counter1Hoooks/>
<Counter2Hoooks/> */}


{/* <ErrorHandling>
  <Product name= 'Iphone'/>
</ErrorHandling>

<ErrorHandling>
  <Product name= 'nokia'/>
</ErrorHandling>
<ErrorHandling>
  <Product name= 'samsung'/>
</ErrorHandling>


    <Portal/> */}
    {/* <Counter01/>
    <Counter02/> */}
    </div>
    {/* <div className="Portal">
      
    </div> */}
    </>
  
  );
}

export default App;
