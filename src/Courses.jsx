import React, { useState } from "react"
import { useLocation } from "react-router-dom";


function Courses() {
    const { state } = useLocation();

    return (
        <h2>{state.semester}</h2 >

    )
}

export default Courses