import { useState } from 'react'
import Semesters from './Semesters.jsx'
import Courses from './Courses.jsx'
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Semesters />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>

    </div>

  )
}

export default App
