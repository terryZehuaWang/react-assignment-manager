

import './add.css'
import { ITEM_TYPE } from "../constants"
import { handleGetItemType, handleGetSlug, handleMakeIdSlugToken } from "../functions"
import { useState } from 'react';

//pass parentCourseToken = {null} if items courses
//pass parentSemesterToken, parentCourseToken = {null} if items are semesters
function Add({ parentSemesterToken, parentCourseToken, setItems }) {
    const itemType = handleGetItemType(parentSemesterToken, parentCourseToken);
    const [itemName, setItemName] = useState("");
    const [itemWeight, setItemWeight] = useState("");
    function handleAddItem() {
        const newObj = {
            id: crypto.randomUUID(),
            name: itemName,
            slugName: handleGetSlug(itemName),
            itemType: itemType,
        };

        newObj.token = handleMakeIdSlugToken(newObj.id, newObj.slugName);
        if (itemType === ITEM_TYPE.ASSIGNMENT) {
            newObj.weight = itemWeight;

            //deadline: null
        }
        setItems((prevItems) => [...prevItems, newObj]);

    }
    return (
        <span className="add">

            <div className="field">
                <h2>Enter {itemType} Name:</h2>
                <input type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)} />
            </div>
            {itemType === ITEM_TYPE.ASSIGNMENT &&

                <div className="field">
                    <h2>Enter Weight Percentage: </h2>
                    <input value={itemWeight}
                        onChange={(e) => setItemWeight(e.target.value)} />
                </div>
            }
            <button className="addButton" onClick={handleAddItem}>Add </button>
        </span>
    )
}

export default Add