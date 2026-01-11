

import './add.css'
import { ITEM_TYPE } from "../constants"
import { handleGetItemType, handleGetSlug } from "../functions"
//pass courseSLugName = {null} if items courses
//pass semesterSlugName, courseSLugName = {null} if items are semesters
//itemWeight, setItemWeight can be undefined if items are not assignments
function Add({ semesterSlugName, courseSLugName, setItems, itemName, setItemName, itemWeight, setItemWeight }) {
    const itemType = handleGetItemType(semesterSlugName, courseSLugName);
    function handleItemNameChange(event) {
        setItemName(event.target.value);
    }
    function handleItemWeightChange(event) {
        setItemWeight(event.target.value);
    }
    function handleItemDeadlineChange(event) {
        //setItemDeadline(event.target.value);
    }

    function handleAddItem() {

        const newObj = {
            id: crypto.randomUUID(),
            name: itemName,
            slugName: handleGetSlug(itemName),
        };
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
                    onChange={handleItemNameChange} />
            </div>
            {itemType == ITEM_TYPE.ASSIGNMENT &&

                <div className="field">
                    <h2>Enter Weight Percentage: </h2>
                    <input value={itemWeight}
                        onChange={handleItemWeightChange} />
                    {/*<h2>Input Deadline 
                    </h2><input/>*/}
                </div>
            }
            <button className="addButton" onClick={handleAddItem}>Add </button>
        </span>
    )
}

export default Add