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
        <Route path="/semester/:parentSemesterToken" element={<Courses />} />
        <Route path="/semester/:parentSemesterToken/course/:parentCourseToken" element={<Assignments />} />
      </Routes>

    </div>

  )
}

export default App
