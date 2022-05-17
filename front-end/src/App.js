import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Signup from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Posts from './components/Posts/Posts'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='posts' element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
