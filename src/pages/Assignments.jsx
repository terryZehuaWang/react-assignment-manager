import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx"

function Assignment() {
    const navigate = useNavigate();
    const { semesterName, courseName } = useParams();
    //useStates
    const [aments, setAments] = useState(() => {
        const saved = localStorage.getItem(`${semesterName}${courseName}Assignments`);
        return saved ? JSON.parse(saved) : [];
    });

    const [amentName, setAmentName] = useState("");
    const [amentWeight, setAmentWeight] = useState(0);
    //end of useStates

    useEffect(() => {
        localStorage.setItem(`${semesterName}${courseName}Assignments`, JSON.stringify(aments));
    }, [aments]);
    function handleBackToSem() {
        navigate("/");
    }


    return (
        <div className="amentPage">
            <Add semester={semesterName} course={courseName} setItems={setAments} itemName={amentName} setItemName={setAmentName} />
            {/*<h2>Semester name:{state.semester.name}</h2 >*/}
            {<h2>Course name:{courseName}</h2 >}

            <Items semester={semesterName} course={courseName} items={aments} />
            <button onClick={handleBackToSem}>Back to Semesters</button>
            <button onClick={() => { setAments([]) }}>Remove All Assignments In this Course</button>
        </div >
    )
}

export default Assignment