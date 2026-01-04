import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'

function Assignment() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [courses, setcourses] = useState([]);
    const [courseName, setcourseName] = useState("");

    function handleBackToSem() {
        navigate("/");
    }
    return (
        <div className="assignmentPage">

            <h2>course name:{state.course.name}</h2 >
            <button onClick={handleBackToSem}>Back to Semesters</button>
        </div>

    )
}

export default Assignment