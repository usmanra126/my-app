//import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navarbar from './component/Navarbar';
import Textform from  './component/Textform';
import React, { useState } from 'react';
import{
  HashRouter as Router,
  Switch,
  Route
}from 'react-router-dom'



function App() {
  const[mode,setmode]=useState('light');

  const[alert,setalert]=useState("null");
const showalert=(Message,type)=>{
  setalert({
    meg:Message,
    types:type,
  });
  setTimeout(() => {
    showalert(null)
   },3000);
}

  const togglemode=()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='gray'
      showalert("dark mode is enable")
     document.title=("dark mode")
    }
    else{
      setmode('light')
       document.body.style.backgroundColor='white'
        showalert("light mode is enable")
          document.title=("dark mode")
    }
  }
  return(
    <>
 <Router>
<Navarbar homes="Address" mode={mode} togglemode={togglemode}></Navarbar>
<Alert alert={alert}/>
<div className='container my-3' >
  <Switch>
  <Route exact path="/about">
    <About about="About us"/>
  </Route>

  <Route exact path="/usman">
    <Textform showalert={showalert} headings="Enter the text" />
  </Route>
</Switch>
</div>
</Router>
</>
  );
}
export default App;
