import React, {useState} from 'react';
import InterfaceContact from "../InterfaceContact/InterfaceContact";
import UpdateContactContainer from "../Contacts/UpdateContact/UpdateContactContainer";

const User = ({id, name, deleteContact}) => {

    const [editMode, setEditMode] = useState(false)

    return (
        <div>
            {!editMode && name}
            {editMode && <UpdateContactContainer/>}
            <InterfaceContact id={id} deleteContact={deleteContact} setEditMode={setEditMode}/>
        </div>
    )
}

export default User