import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx"

function Courses() {
    const { semesterName } = useParams();
    const navigate = useNavigate();
    const [courses, setCourses] = useState(() => {
        const saved = localStorage.getItem("courses");
        return saved ? JSON.parse(saved) : [];
    }
    );
    const [courseName, setCourseName] = useState("");
    useEffect(() => {
        localStorage.setItem("courses", JSON.stringify(courses));
    }, [courses])

    //functions
    function handleBackToSem() {
        navigate("/");
    }
    return (
        <div className="coursesPage">
            <Add semester={semesterName} course={null} setItems={setCourses} itemName={courseName} setItemName={setCourseName} />
            {/*<h2>Semester name:{state.semester.name}</h2 >*/}
            {<h2>Semester name:{semesterName}</h2 >}

            <Items semester={semesterName} course={null} items={courses} />
            <button onClick={handleBackToSem}>Back to Semesters</button>

        </div>
    )
}

export default Courses