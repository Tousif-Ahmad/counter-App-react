import React, { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
const App = () => {
  const [count, setCount] = useState(0);

  
  return (
    <div>
      <Navbar data={count}/>
    </div>
  )
}

export default App