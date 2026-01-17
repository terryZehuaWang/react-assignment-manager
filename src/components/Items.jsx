import './items.css'
import { ITEM_TYPE } from "../constants"
import { handleGetItemType, handleDeleteAllChildren, handleGetIdFromToken, handleGetSlug, handleMakeIdSlugToken } from "../functions"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

//pass parentCourseToken = {undefined} if item is a course 
//pass parentSemesterToken = {undefined} and parentCourseToken = {undefined} if item is a semester
function Items({ parentSemesterToken, parentCourseToken, items, setItems }) {
    const [itemName, setItemName] = useState("");
    const [itemWeight, setItemWeight] = useState("");
    const [editingId, setEditingId] = useState(null);
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
    function handleUpdateNameSlugToken(item) {
        const id = item.id;
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, name: itemName, slugName: handleGetSlug(itemName), token: handleMakeIdSlugToken(item.id, handleGetSlug(itemName)) }
                    : item
            )
        );
    }

    function handleEditButtonClicked(item) {
        setEditingId(item.id);
        setItemName(item.name);
        itemType === ITEM_TYPE.ASSIGNMENT && setItemWeight(item.weight);
    }

    function handleUpdateWeight(item) {
        const id = item.id;
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, weight: itemWeight }
                    : item
            )
        );
    }
    function handleConfirmEdit(item) {
        handleUpdateNameSlugToken(item);
        itemType === ITEM_TYPE.ASSIGNMENT && handleUpdateWeight(item);
        setEditingId(null);
    }

    return (
        <div className="items">
            {items.map((item) => {
                return (

                    <div className="list" key={item.id}>
                        {item.id !== editingId && (
                            <div>
                                <h2 className="itemInfo" id={itemType === ITEM_TYPE.ASSIGNMENT ? "assignmentInfo" : "nonAssignmentInfo"} onClick={() => { handleItemClicked(item) }}>
                                    {item.name}
                                    {itemType == ITEM_TYPE.ASSIGNMENT && (<span> - weight {item.weight}% </span>)}

                                </h2>
                            </div>
                        )
                        }

                        {
                            item.id === editingId && (
                                <div className="editing">
                                    <h2>New Name</h2>
                                    <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                                    {(itemType === ITEM_TYPE.ASSIGNMENT) &&
                                        <div>
                                            <h2>New Weight</h2>
                                            <input type="text" value={itemWeight} onChange={(e) => setItemWeight(e.target.value)} />
                                        </div>
                                    }
                                    <div className="editingActions">
                                        <button onClick={(e) => handleConfirmEdit(item)}>Confirm</button>
                                        <button onClick={() => setEditingId(null)}>Cancel</button>
                                    </div>
                                </div>
                            )
                        }
                        {
                            item.id !== editingId && (
                                <div className="actions">
                                    <button id="editButton" onClick={() => {
                                        handleEditButtonClicked(item);
                                    }}>Edit</button>

                                    <button id="deleteButton" onClick={() => { handleDeleteItem(item, parentSemesterId) }}>Delete</button>
                                </div>
                            )
                        }
                    </div>

                );
            })}
        </div >
    )
}

export default Items