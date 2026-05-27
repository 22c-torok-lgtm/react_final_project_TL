import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DinoForm from './components/DinoForm'
import DinoItem from './components/DinoItem'
import DinoList from './components/DinoList'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Login from "./components/Login"
import { AuthProvider } from './context/loginContext';

function App() {
  const [DinoData, setDinoData] = useState([]);

    const handleDinoData = (data) => {
    setDinoData((prevData) => [...prevData, data]);
    getDinoData();
  };

  const getDinoData = async () => {
    try {
      const response = await fetch('http://localhost:3000/dinos', {
        
      });
      if (response.ok) {
        const data = await response.json();
        setDinoData(data);
      } else {
        console.error('Hiba az adatok lekérésekor');
      }
    } catch (error) {
      console.error('Hiba:', error);
    }
  };


  const deleteDino = (id) => {
    getDinoData();
  }

  return (
    <>
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<DinoList dinos={DinoData}/>} />
        <Route path='form' element={<DinoForm sendDataToApp={handleDinoData} />} />
        {/* <Route path='form' element={<ProtectedRoute><DinoForm sendDataToApp={handleDinoData} /></ProtectedRoute>} /> */}
        <Route path='login' element={<Login />} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
