import "./pages.css"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx"
import { handleGetIdFromToken, handleGetorGenCoursesKey } from "../functions.js"

function Courses() {
    const { parentSemesterToken } = useParams();
    const parentSemesterId = handleGetIdFromToken(parentSemesterToken);
    const coursesKey = handleGetorGenCoursesKey(parentSemesterId);
    const navigate = useNavigate();
    const [courses, setCourses] = useState(() => {
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
            <Add parentSemesterToken={parentSemesterToken} parentCourseToken={undefined} setItems={setCourses} />
            <Items parentSemesterToken={parentSemesterToken} parentCourseToken={undefined} items={courses} setItems={setCourses} />
            <div className="buttonList">
                <button onClick={handleBackToSems}>Back to Semesters</button>
                <button onClick={() => {
                    Object.keys(localStorage).filter(k => k.startsWith(`sem-${parentSemesterId}-`)).forEach(k => localStorage.removeItem(k))
                    setCourses([]);
                }}>Remove All Courses in This Semester</button>
            </div>
        </div >
    )
}

export default Courses