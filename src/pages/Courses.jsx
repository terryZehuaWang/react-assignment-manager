import React, { useState } from "react"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Add from '../components/Add.jsx';

function Courses() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [courses, setcourses] = useState([]);
    const [courseName, setcourseName] = useState("");

    function handleBackToSem() {
        navigate("/");
    }
    return (
        <div className="coursesPage">
            <Add setItems={setcourses} itemName={courseName} setItemName={setcourseName} />
            <h2>{state.semester}</h2 >
            <button onClick={handleBackToSem}>Back to Semesters</button>
        </div>

    )
}

export default Courses