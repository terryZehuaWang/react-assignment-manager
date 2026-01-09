import "./pages.css"
import React, { useEffect, useState } from "react"
//import { Link } from "react-router-dom"
//import { useNavigate } from "react-router-dom"
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx";


function Semesters() {
    //const navigate = useNavigate();
    const [semesters, setSemesters] = useState(() => {
        const saved = localStorage.getItem("semesters");
        return saved ? JSON.parse(saved) : [{ name: "Winter 2025 (Sample semester)" }];
    }
    );
    const [semesterName, setSemesterName] = useState("");
    useEffect(() => {
        localStorage.setItem("semesters", JSON.stringify(semesters));
    }, [semesters])

    return (
        <div className="semestersPage">
            <Add semester={null} course={null} setItems={setSemesters} itemName={semesterName} setItemName={setSemesterName} />
            <Items semester={null} course={null} items={semesters} />
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