import { useState } from 'react'
import Semesters from './pages/Semesters.jsx'
import Courses from './pages/Courses.jsx'
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Semesters />} />
        <Route path="/:semesterName" element={<Courses />} />
      </Routes>

    </div>

  )
}

export default App
