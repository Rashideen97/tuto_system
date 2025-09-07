import { useState } from 'react'
import StudentCard from './StudentCard'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Term from './term'
import Student from './Student'
import Home from './Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/term" element={<Term />} />
            <Route path="/students" element={<Student/>} />

          </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
