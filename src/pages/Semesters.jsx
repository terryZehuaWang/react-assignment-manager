
import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Add from '../components/Add.jsx';

function Semesters() {
    const navigate = useNavigate();
    const [semesters, setSemesters] = useState(["Winter 2025 (Sample semester)"]);
    const [semesterName, setSemesterName] = useState("");



    function handleGoToCourses(semester) {

        const semURIName = encodeURIComponent(semester
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-"));

        navigate(`/${semURIName}`, { state: { semester } });
        //navigate("/courses", { state: { semester } });
    }

    return (
        <div className="semestersPage">
            <Add semesters={semesters} setSemesters={setSemesters} semesterName={semesterName} setSemesterName={setSemesterName} />
            <div className="semesterDisplayBlock">
                {semesters.map((semester) => {
                    return (
                        <div>
                            <h2 onClick={() => { handleGoToCourses(semester) }}>
                                {semester}</h2>
                        </div>
                    );
                })}
            </div>
        </div >
    )
}
export default Semesters