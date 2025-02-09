import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0);

   const obj1={
    name: 'Ashok',
    age : 25
  }
  
  
  const obj2={
    name: 'Akash',
    age : 30
  }

  return (
    <>
      <h1 className='bg-red-200'>Tailwaind test</h1>
      <Card data={obj1}/>
      <Card data={obj2}/>
      
    </>
  )
}

export default App
