


import { ITEM_TYPE } from "../constants"
import { handleGetItemType } from "../functions"
//pass course = {null} if items courses
//pass semester, course = {null} if items are semesters
//itemWeight, setItemWeight can be undefined if items are not assignments
function Add({ semester, course, setItems, itemName, setItemName, itemWeight, setItemWeight }) {
    const itemType = handleGetItemType(semester, course);
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

        let newObj;
        if (itemType == ITEM_TYPE.ASSIGNMENT) {
            newObj = {
                name: itemName,
                weight: itemWeight,
                //deadline: null
            }
        } else {
            newObj = { name: itemName };
        }

        setItems((prevItems) => [...prevItems, newObj]);

    }
    return (
        <div className="add">
            <h2>Input {itemType}</h2>
            <input type="text"
                value={itemName}
                onChange={handleItemNameChange} />

            {itemType == ITEM_TYPE.ASSIGNMENT &&
                <>
                    <h2>Input Weight Percentage </h2>
                    <input value={itemWeight}
                        onChange={handleItemWeightChange} />
                    {/*<h2>Input Deadline 
                    </h2><input/>*/}
                </>
            }
            <button onClick={handleAddItem}>Add {itemType}</button>
        </div>
    )
}

export default Add