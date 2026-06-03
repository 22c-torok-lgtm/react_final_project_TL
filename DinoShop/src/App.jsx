import { useState, useEffect } from 'react'
import './App.css'
import DinoForm from './components/DinoForm'
import DinoList from './components/DinoList'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from "./components/Login"
import { AuthProvider } from './context/loginContext';

function App() {
  const [DinoData, setDinoData] = useState([]);

  const handleDinoData = (data) => {
    setDinoData((prevData) => [...prevData, data]);
  };

  const deleteDino = (id) => {
    setDinoData((prevData) => prevData.filter((dino) => dino.id !== id));
  };

  const getDinoData = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
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

  useEffect(() => {
    getDinoData();
  }, []);

  return (
    <>
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<DinoList dinos={DinoData} deleteDino={deleteDino}/>} />
        <Route path='form' element={<DinoForm sendDataToApp={handleDinoData} />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
