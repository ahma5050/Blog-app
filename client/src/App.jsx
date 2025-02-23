import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App