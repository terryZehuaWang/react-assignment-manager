

import './add.css'
import { ITEM_TYPE } from "../constants"
import { handleGetItemType, handleGetSlug, handleMakeIdSlugToken } from "../functions"
//pass courseSLugName = {null} if items courses
//pass semesterSlugName, courseSLugName = {null} if items are semesters
//itemWeight, setItemWeight can be undefined if items are not assignments
function Add({ parentSemesterToken, parentCourseToken, setItems, itemName, setItemName, itemWeight, setItemWeight }) {
    const itemType = handleGetItemType(parentSemesterToken, parentCourseToken);




    function handleAddItem() {

        const newObj = {
            id: crypto.randomUUID(),
            name: itemName,
            slugName: handleGetSlug(itemName),
            itemType: itemType,
            editMode: false,

        };

        newObj.token = handleMakeIdSlugToken(newObj.id, newObj.slugName);
        if (itemType == ITEM_TYPE.ASSIGNMENT) {
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
            {itemType == ITEM_TYPE.ASSIGNMENT &&

                <div className="field">
                    <h2>Enter Weight Percentage: </h2>
                    <input value={itemWeight}
                        onChange={(e) => setItemWeight(e.target.value)} />
                    {/*<h2>Input Deadline 
                    </h2><input/>*/}
                </div>
            }
            <button className="addButton" onClick={handleAddItem}>Add </button>
        </span>
    )
}

export default Add