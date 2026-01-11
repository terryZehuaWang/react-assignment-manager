import "./pages.css"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx"
import { handleGetSlug, handleGenItemsKey } from "../functions"

function Assignment() {
    const navigate = useNavigate();
    const { semesterSlugName, courseSlugName } = useParams();
    //useStates
    amentsKey = handleGenItemsKey(semesterSlugName, courseSlugName);
    const [aments, setAments] = useState(() => {

        const saved = localStorage.getItem(amentsKey);
        return saved ? JSON.parse(saved) : [];
    });

    const [amentName, setAmentName] = useState("");
    const [amentWeight, setAmentWeight] = useState("");
    //end of useStates

    useEffect(() => {
        localStorage.setItem(amentsKey, JSON.stringify(aments));
    }, [aments]);
    function handleBackToSems() {
        navigate("/");
    }
    function handleBackToCourses() {
        navigate(`/semester/${handleGetSlug(semesterSlugName)}`);
    }

    return (
        <div className="amentPage">
            {/*<h2>Course name:{courseName}</h2 >*/}
            <Add semesterSlugName={semesterSlugName} courseSLugName={courseSlugName} setItems={setAments} itemName={amentName} setItemName={setAmentName}
                itemWeight={amentWeight} setItemWeight={setAmentWeight} />
            {/*<h2>Semester name:{state.semester.name}</h2 >*/}
            <Items semesterSlugName={semesterSlugName} courseSlugName={courseSlugName} items={aments} />
            <div className="buttonList">
                <button onClick={handleBackToSems}>Back to Semesters</button>
                <button onClick={handleBackToCourses}>Back to Courses</button>
                <button onClick={() => { setAments([]) }}>Remove All Assignments In this Course</button>
            </div>
        </div >
    )
}

export default Assignment