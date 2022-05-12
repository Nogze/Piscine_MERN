import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
