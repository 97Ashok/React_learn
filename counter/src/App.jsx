import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15)

  // let counter =5;
  // const addValue=()=>{
  //   console.log('value added');
  //   counter++;
  //   document.getElementById('count1').innerHTML= 'Counter value : '+counter;
  // }
  // const decValue=()=>{
  //   console.log('descrease added')
  //   counter--;
  //   document.getElementById('count').innerHTML= 'Counter value : '+counter;
  // }
  



  const addValue=()=>{
    console.log('value added');
    setCounter(counter+1)
   
  }
  const decValue=()=>{
    console.log('value descresed');
    setCounter(counter-1)
   
  }

  return (
    <>
       <h2 id='count1'>Counter value : {counter}</h2>
       <button onClick={addValue}> Add value </button>
       <br/>
       <button onClick={decValue}> Decrease value</button>
    </>
  )
}

export default App
