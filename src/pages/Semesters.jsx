import "./pages.css"
import React, { useEffect, useState } from "react"
import { SEMESTERS_KEY } from "../constants.js";
//import { Link } from "react-router-dom"
//import { useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx";


function Semesters() {
    //const navigate = useNavigate();
    const [semesters, setSemesters] = useState(() => {
        const saved = localStorage.getItem("semesters");
        return saved ? JSON.parse(saved) : [];
    }
    );
    const [semesterName, setSemesterName] = useState("");
    useEffect(() => {
        localStorage.setItem(SEMESTERS_KEY, JSON.stringify(semesters));
    }, [semesters])

    return (
        <div className="semestersPage">
            <Add semesterSlugName={undefined} courseSLugName={undefined} setItems={setSemesters} itemName={semesterName} setItemName={setSemesterName} />
            <Items semesterSlugName={undefined} courseSlugName={undefined} items={semesters} setItems={setSemesters}
                itemName={semesterName} setItemName={setSemesterName}
            />
            <div className="buttonList">
                <button onClick={() => {
                    localStorage.clear();
                    setSemesters([]);
                }}>Remove All Semesters</button>
            </div>

        </div >
    )
}
export default Semesters