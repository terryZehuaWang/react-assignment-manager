import './items.css'
import { ITEM_TYPE } from "../constants"
import { handleMakeIdSlugToken, handleGetItemType } from "../functions"
import { useNavigate } from "react-router-dom"

//pass courseSlugName = {null} if item is a course 
//pass semesterSlugName = {null} and courseSlugName = {null} if item is a semester
function Items({ parentSemesterToken, parentCourseToken, items }) {
    const itemType = handleGetItemType(parentSemesterToken, parentCourseToken);
    const navigate = useNavigate();
    //functions
    function handleItemClicked(item) {
        if (itemType == ITEM_TYPE.ASSIGNMENT) return;
        let onClickRoute;
        if (itemType == ITEM_TYPE.SEMESTER) {
            //const clickedSemesterToken = handleMakeIdSlugToken(item.id, item.slugName);
            onClickRoute = `/semester/${item.token}`;
        } else { //itemType == ITEM_TYPE.COURSE
            //clickedCourseToken = handleMakeIdSlugToken(item.id, item.slugName);
            onClickRoute = `/semester/${parentSemesterToken}/course/${item.token}`;
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