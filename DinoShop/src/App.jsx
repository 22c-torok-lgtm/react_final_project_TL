import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DinoForm from './components/DinoForm'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<DinoForm/>}/>
    </Routes>
    </>
  )
}

export default App
