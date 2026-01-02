

function Add({ setItems, itemName, setItemName }) {
    function handleItemNameChange(event) {
        setItemName(event.target.value);
    }
    function handleAddItem() {
        setItems((prevItems) => [...prevItems, itemName]);

    }
    return (
        <div className="add">
            <input type="text"
                value={itemName}
                onChange={handleItemNameChange}>
            </input>
            <button onClick={handleAddItem}>Add Semester</button>
        </div>
    )
}
export default Add