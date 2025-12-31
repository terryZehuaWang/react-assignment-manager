import React, { useState } from "react";

function Add({ semesters, setSemesters, semesterName, setSemesterName }) {
    function handleSemesterNameChange(event) {
        setSemesterName(event.target.value);
    }
    function handleAddSemester(event) {
        setSemesters((prevSemesters) => [...prevSemesters, semesterName]);
        console.log(semesters);
    }
    return (
        <div className="add">
            <input type="text"
                value={semesterName}
                onChange={handleSemesterNameChange}>
            </input>
            <button onClick={handleAddSemester}>Add Semester</button>
        </div>
    )
}
export default Add