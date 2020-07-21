import React, {useState} from 'react';
import InterfaceContact from "../InterfaceContact/InterfaceContact";
import {UpdateContact} from "../Contacts/UpdateContact/UpdateContact";

const User = ({id, name, deleteContact, updateContact}) => {

    const [editMode, setEditMode] = useState(false)

    return (
        <div>
            {!editMode && name}
            {editMode &&
            <UpdateContact id={id} updateContact={updateContact}/>}
            <InterfaceContact id={id} deleteContact={deleteContact} setEditMode={setEditMode}/>
        </div>
    )
}

export default User