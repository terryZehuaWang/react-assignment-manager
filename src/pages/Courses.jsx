import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx"

function Courses() {
    const { semesterName } = useParams();
    const navigate = useNavigate();
    const [courseName, setCourseName] = useState("");

    const [courses, setCourses] = useState(() => {
        const saved = localStorage.getItem(`${semesterName}Courses`);
        return saved ? JSON.parse(saved) : [];
    }
    );

    useEffect(() => {
        localStorage.setItem(`${semesterName}Courses`, JSON.stringify(courses));
    }, [courses]);

    //functions
    function handleBackToSems() {
        navigate("/");
    }
    return (
        <div className="coursesPage">
            {<h2>Semester name:{semesterName}</h2 >}
            <Add semester={semesterName} course={null} setItems={setCourses} itemName={courseName} setItemName={setCourseName} />
            {/*<h2>Semester name:{state.semester.name}</h2 >*/}


            <Items semester={semesterName} course={null} items={courses} />
            <button onClick={handleBackToSems}>Back to Semesters</button>
            <button onClick={() => {
                Object.keys(localStorage).filter(k => k.startsWith(`${semesterName}`)).forEach(k => localStorage.removeItem(k))
                setCourses([]);
            }}>Remove All Courses In this Semesters</button>
        </div >
    )
}

export default Courses