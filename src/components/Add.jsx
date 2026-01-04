


import { ITEM_TYPE } from "../constants"
import { handleGetItemType } from "../functions"
//pass course = {null} if item is a course 
//pass semester = {null} and course = {null} if item is a semester
function Add({ semester, course, setItems, itemName, setItemName, }) {
    const itemType = handleGetItemType(semester, course);
    function handleItemNameChange(event) {
        setItemName(event.target.value);
    }
    function handleAddItem() {

        let newObj;
        if (itemType == ITEM_TYPE.ASSIGNMENT) {
            newObj = {
                name: itemName,
                weight: null,
                deadline: null
            }
        } else {
            newObj = { name: itemName };
        }

        setItems((prevItems) => [...prevItems, newObj]);

    }
    return (
        <div className="add">
            <input type="text"
                value={itemName}
                onChange={handleItemNameChange}>
            </input>
            <button onClick={handleAddItem}>Add {itemType}</button>
        </div>
    )
}

export default Add