import React, {forwardRef, useState} from 'react';
import InterfaceContact from "../InterfaceContact/InterfaceContact";
import {UpdateContact} from "../Contacts/UpdateContact/UpdateContact";
import style from "./User.module.css"

const User = forwardRef(({id, name, deleteContact, updateContact}, ref) => {

    const [editMode, setEditMode] = useState(false)

    return (
        <div className={style.user} ref={ref}>
            {!editMode && name}
            {editMode &&
            <UpdateContact id={id} updateContact={updateContact} setEditMode={setEditMode}/>}
            <InterfaceContact id={id} deleteContact={deleteContact} setEditMode={setEditMode}/>
        </div>
    )
})


export default User