import "./pages.css"
import { useEffect, useState } from "react"
import { SEMESTERS_KEY } from "../constants.js";
import Add from '../components/Add.jsx'
import Items from "../components/Items.jsx";


function Semesters() {
    const [semesters, setSemesters] = useState(() => {
        const saved = localStorage.getItem("semesters");
        return saved ? JSON.parse(saved) : [];
    }
    );

    useEffect(() => {
        localStorage.setItem(SEMESTERS_KEY, JSON.stringify(semesters));
    }, [semesters])

    return (
        <div className="semestersPage">
            <Add semesterSlugName={undefined} courseSLugName={undefined} setItems={setSemesters} />
            <Items semesterSlugName={undefined} courseSlugName={undefined} items={semesters} setItems={setSemesters}

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