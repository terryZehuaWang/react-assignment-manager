
import { ITEM_TYPE } from "../constants"
import { handleGetItemType, convertToURI } from "../functions"
import { useNavigate } from "react-router-dom"
//pass course = {null} if item is a course 
//pass semester = {null} and course = {null} if item is a semester
function Items({ semester, course, items }) {
    const itemType = handleGetItemType(semester, course);
    const navigate = useNavigate();
    function handleItemClicked(item) {
        if (itemType == ITEM_TYPE.ASSIGNMENT) return;
        let onClickRoute;
        if (itemType == ITEM_TYPE.SEMESTER) {
            onClickRoute = `/semester/${convertToURI(item.name)}`;
        } else {
            onClickRoute = `/semester/${convertToURI(semester)}/course/${convertToURI(item.name)}`;
        }
        navigate(onClickRoute, { state: { item } });
    }
    return (
        <div className="semesterDisplayBlock">
            {items.map((item, idx) => {
                return (
                    <div key={idx}>
                        <h2 onClick={() => { handleItemClicked(item) }}>
                            {item.name}
                            {itemType == ITEM_TYPE.ASSIGNMENT && (<span> - weight {item.weight}% </span>)}</h2>
                    </div>
                );
            })}
        </div>
    )
}

export default Items