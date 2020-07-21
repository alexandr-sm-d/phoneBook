import React from "react";

const InterfaceContact = ({id, deleteContact, setEditMode}) => {
    return (
        <div>
            <button onClick={() => deleteContact(id)}>Delete</button>
            <button onClick={setEditMode}>Edit</button>
        </div>
    )
}

export default InterfaceContact