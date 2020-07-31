import React from "react";
import style from './InterfaceContact.module.css'

const InterfaceContact = ({id, deleteContact, setEditMode}) => {
    return (
        <>
            <button className={style.delete} onClick={() => deleteContact(id)}>Del</button>
            <button className={style.edit} onClick={setEditMode}>Ed</button>
        </>
    )
}

export default InterfaceContact