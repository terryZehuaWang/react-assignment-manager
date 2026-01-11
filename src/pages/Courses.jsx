import "./pages.css"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx"
import { handleGenItemsKey, handleFindSemesterIdFromSlug, handlePrintAllKeys } from "../functions.js"

function Courses() {
    const { semesterSlugName } = useParams();
    const navigate = useNavigate();
    const [courseName, setCourseName] = useState("");

    const coursesKey = handleGenItemsKey(semesterSlugName, null);
    const semesterId = handleFindSemesterIdFromSlug(semesterSlugName);
    //console.log(semesterId);
    handlePrintAllKeys();
    const [courses, setCourses] = useState(() => {
        //const saved = localStorage.getItem(`${semesterName}Courses`);
        const saved = localStorage.getItem(coursesKey);
        return saved ? JSON.parse(saved) : [];
    }
    );

    useEffect(() => {

        localStorage.setItem(coursesKey, JSON.stringify(courses));
    }, [courses]);

    //functions
    function handleBackToSems() {
        navigate("/");
    }
    return (
        <div className="coursesPage">
            {/*<h2>Semester name:{semesterName}</h2 >*/}
            <Add semesterSlugName={semesterSlugName} courseSLugName={null} setItems={setCourses} itemName={courseName} setItemName={setCourseName} />
            {/*<h2>Semester name:{state.semester.name}</h2 >*/}


            <Items semesterSlugName={semesterSlugName} courseSlugName={null} items={courses} />
            <div className="buttonList">
                <button onClick={handleBackToSems}>Back to Semesters</button>
                <button onClick={() => {
                    Object.keys(localStorage).filter(k => k.startsWith(`sem-${semesterId}-`)).forEach(k => localStorage.removeItem(k))
                    setCourses([]);
                }}>Remove All Courses In this Semesters</button>
            </div>
        </div >
    )
}

export default Courses