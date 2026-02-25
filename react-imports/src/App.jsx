import React from 'react'
import './App.css'
import Header, {Card, Card2} from '../components/Header'
import reactLogo from './assets/react.svg'
const App = () => {
  return (
    <>
    <h1>App</h1>
    <Header/>
    <Card/>
    <Card2/>
    <img src={reactLogo} alt="" />
    </>
  )
}




export default App