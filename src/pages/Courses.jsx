import React, { useState } from "react"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Courses() {
    const navigate = useNavigate();
    const { state } = useLocation();

    function handleBackToSem() {
        navigate("/");
    }
    return (
        <div className="coursesPage">
            <h2>{state.semester}</h2 >
            <button onClick={handleBackToSem}>Back to Semesters</button>
        </div>

    )
}

export default Courses