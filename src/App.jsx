import { useState } from 'react'
import Semesters from './pages/Semesters.jsx'
import Courses from './pages/Courses.jsx'
import Assignments from './pages/Assignments.jsx'
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Semesters />} />
        <Route path="/semester/:semesterName" element={<Courses />} />
        <Route path="/semester/:semesterName/course/:courseName" element={<Assignments />} />
      </Routes>

    </div>

  )
}

export default App
