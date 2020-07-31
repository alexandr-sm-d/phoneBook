import React, {forwardRef, useState} from 'react';
import InterfaceContact from "../InterfaceContact/InterfaceContact";
import {UpdateContact} from "../Contacts/UpdateContact/UpdateContact";
import style from "./User.module.css"

const User = forwardRef(({id, name, deleteContact, updateContact}, ref) => {

    const [editMode, setEditMode] = useState(false)

    return (
        <div className={style.contact} ref={ref}>
            <div className={style.info}>
                {!editMode && <span>{name}</span>}
            </div>
            <div className={style.card}>
                <div className={style.back}>
                    <button className={style.call}></button>
                    {editMode && <UpdateContact id={id} updateContact={updateContact} setEditMode={setEditMode}/>}
                    <InterfaceContact id={id} deleteContact={deleteContact} setEditMode={setEditMode}/>
                </div>
                <div className={style.front}>
                    Show more...
                </div>
            </div>
        </div>
    )
})


export default User