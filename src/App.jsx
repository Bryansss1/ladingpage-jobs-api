import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Verify_email from './pages/Verify_email'
import Home from './pages/Home'

function App() {
  

  return (
   <HashRouter>
    <section className="App">
    <Routes>
      <Route path='/verify/:email/num/:pass' element={<Verify_email/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </section>
   </HashRouter>
  )
}

export default App
