import React from "react";
import style from './InterfaceContact.module.css'


const InterfaceContact = ({id, deleteContact, enableUpdate, getID}) => {
    const editMode = () => {
        getID(id)
        enableUpdate()
    }

    return (
        <>
            <button className={style.call}></button>
            <button className={style.delete} onClick={() => deleteContact(id)}>Del</button>
            <button className={style.edit} onClick={editMode}>Ed</button>
        </>
    )
}

export default InterfaceContact