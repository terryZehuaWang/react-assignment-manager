
import React, { useState } from "react"
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Semesters() {
    const navigate = useNavigate();
    const [semesters, setSemesters] = useState(["Winter 2025 (Sample semester)"]);
    const [semesterName, setSemesterName] = useState("");
    function handleAddSemester(event) {
        setSemesters((prevSemesters) => [...prevSemesters, semesterName]);
        console.log(semesters);
    }

    function handleSemesterNameChange(event) {
        setSemesterName(event.target.value);
    }

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
            <div className="addSemester">
                <input type="text"
                    value={semesterName}
                    onChange={handleSemesterNameChange}>
                </input>
                <button onClick={handleAddSemester}>Add Semester</button>
            </div>
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