import "./pages.css"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx"
import { convertToURI } from "../functions"

function Assignment() {
    const navigate = useNavigate();
    const { semesterName, courseName } = useParams();
    //useStates
    const [aments, setAments] = useState(() => {
        const saved = localStorage.getItem(`${semesterName}${courseName}Assignments`);
        return saved ? JSON.parse(saved) : [];
    });

    const [amentName, setAmentName] = useState("");
    const [amentWeight, setAmentWeight] = useState();
    //end of useStates

    useEffect(() => {
        localStorage.setItem(`${semesterName}${courseName}Assignments`, JSON.stringify(aments));
    }, [aments]);
    function handleBackToSems() {
        navigate("/");
    }
    function handleBackToCourses() {
        navigate(`/semester/${convertToURI(semesterName)}`);
    }

    return (
        <div className="amentPage">
            {/*<h2>Course name:{courseName}</h2 >*/}
            <Add semester={semesterName} course={courseName} setItems={setAments} itemName={amentName} setItemName={setAmentName}
                itemWeight={amentWeight} setItemWeight={setAmentWeight} />
            {/*<h2>Semester name:{state.semester.name}</h2 >*/}
            <Items semester={semesterName} course={courseName} items={aments} />
            <div className="buttonList">
                <button onClick={handleBackToSems}>Back to Semesters</button>
                <button onClick={handleBackToCourses}>Back to Courses</button>
                <button onClick={() => { setAments([]) }}>Remove All Assignments In this Course</button>
            </div>
        </div >
    )
}

export default Assignment