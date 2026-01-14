import './items.css'
import { ITEM_TYPE } from "../constants"
import { handleGetItemType, handleDeleteAllChildren, handleGetIdFromToken } from "../functions"
import { useNavigate } from "react-router-dom"

//pass courseSlugName = {null} if item is a course 
//pass semesterSlugName = {null} and courseSlugName = {null} if item is a semester
function Items({ parentSemesterToken, parentCourseToken, items, setItems }) {
    const itemType = handleGetItemType(parentSemesterToken, parentCourseToken);

    let parentSemesterId = handleGetIdFromToken(parentSemesterToken);
    let parentCourseId = handleGetIdFromToken(parentCourseToken);

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
    function handleDeleteItem(itemToDelete, parentSemesterId) {
        handleDeleteAllChildren(itemToDelete, parentSemesterId);
        setItems((prevItems) => prevItems.filter(item => item.id !== itemToDelete.id));
    }
    function handleRenameItem(id, newName) {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, name: newName }
                    : item
            )
        );
    }
    function handleEditModeOn(item) {
        const id = item.id;
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, editMode: true }
                    : item
            )
        );
        console.log(item);
    }
    function handleEditModeOff(item) {
        const id = item.id;
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, editMode: false }
                    : item
            )
        );
    }
    function handleConfirmEdit(item,) {
        /*
        const id = item.id;
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, name: false }
                    : item
            )
        );
        */
    }



    return (
        <div className="items">
            {items.map((item) => {
                return (

                    <div className="list" key={item.id}>
                        {!item.editMode && (
                            <div>
                                <h2 className="listItem" onClick={() => { handleItemClicked(item) }}>
                                    {item.name}
                                    {itemType == ITEM_TYPE.ASSIGNMENT && (<span> - weight {item.weight}% </span>)}

                                </h2>
                            </div>
                        )}

                        {item.editMode && (
                            <div>
                                <h2>New Name</h2>
                                <input type="text" onClick={() => handleRenameItem(item)} />
                                <button onClick={() => handleEditModeOff(item)}>Confirm</button>
                                <button onClick={() => handleEditModeOff(item)}>Cancel</button>
                            </div>
                        )}
                        {!item.editMode && (
                            <div>
                                <button id="editButton" onClick={() => { handleEditModeOn(item) }}>-Edit</button>

                                <button id="deleteButton" onClick={() => { handleDeleteItem(item, parentSemesterId) }}>-Delete</button>
                            </div>
                        )}
                    </div>



                );
            })}
        </div>
    )
}

export default Items