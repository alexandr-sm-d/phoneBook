import React from "react";
import style from './InterfaceContact.module.css'
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";


const InterfaceContact = ({id, deleteContact, enableUpdate, getID}) => {
    const editMode = () => {
        getID(id)
        enableUpdate()
    }

    return (
        <>
            <button className={style.call}>
                <PhoneOutlined />
            </button>
            <button className={style.delete} onClick={() => deleteContact(id)}>
                <DeleteOutlined />
            </button>
            <button className={style.edit} onClick={editMode}>
                <EditOutlined />
            </button>
        </>
    )
}

export default InterfaceContact