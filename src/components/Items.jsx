import './items.css'
import { ITEM_TYPE } from "../constants"
import { handleGetItemType, handleDeleteAllChildren } from "../functions"
import { useNavigate } from "react-router-dom"

//pass courseSlugName = {null} if item is a course 
//pass semesterSlugName = {null} and courseSlugName = {null} if item is a semester
function Items({ parentSemesterToken, parentCourseToken, items, setItems }) {
    const itemType = handleGetItemType(parentSemesterToken, parentCourseToken);
    const navigate = useNavigate();
    //functions
    function handleItemClicked(item) {
        if (itemType == ITEM_TYPE.ASSIGNMENT) return;
        let onClickRoute;
        if (itemType == ITEM_TYPE.SEMESTER) {

            onClickRoute = `/semester/${item.token}`;
        } else { //itemType == ITEM_TYPE.COURSE
            onClickRoute = `/semester/${parentSemesterToken}/course/${item.token}`;
        }
        navigate(onClickRoute, { state: { item } });
    }
    function handleDeleteItem(itemToDelete, semesterId, courseId) {
        handleDeleteAllChildren(semesterId, courseId, itemToDelete);
        setItems((prevItems) => prevItems.filter(item => item.id !== itemToDelete.id));
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
                        <h2 className="list" onClick={() => { handleDeleteItem(item) }}>-Delete</h2>
                    </div>
                );
            })}
        </div>
    )
}

export default Items