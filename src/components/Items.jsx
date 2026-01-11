import './items.css'
import { ITEM_TYPE } from "../constants"
import { handleGetItemType } from "../functions"
import { useNavigate } from "react-router-dom"
//pass courseSlugName = {null} if item is a course 
//pass semesterSlugName = {null} and courseSlugName = {null} if item is a semester
function Items({ semesterSlugName, courseSlugName, items }) {
    const itemType = handleGetItemType(semesterSlugName, courseSlugName);
    const navigate = useNavigate();
    function handleItemClicked(item) {
        if (itemType == ITEM_TYPE.ASSIGNMENT) return;
        let onClickRoute;
        if (itemType == ITEM_TYPE.SEMESTER) {
            onClickRoute = `/semester/${item.slugName}`;
        } else {
            onClickRoute = `/semester/${semesterSlugName}/course/${item.slugName}`;
        }
        navigate(onClickRoute, { state: { item } });
    }
    function handleItemDeleted(item) {

    }
    return (
        <div className="items">
            {items.map((item) => {
                return (
                    <div className="list" key={item.id}>
                        <h2 className="listItem" onClick={() => { handleItemClicked(item) }}>
                            {item.name}
                            {itemType == ITEM_TYPE.ASSIGNMENT && (<span> - weight {item.weight}% </span>)}

                        </h2>
                        <h2 className="list">-Delete</h2>
                    </div>
                );
            })}
        </div>
    )
}

export default Items