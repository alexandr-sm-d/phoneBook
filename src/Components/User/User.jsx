import React, {forwardRef, useState} from 'react';
import InterfaceContact from "../InterfaceContact/InterfaceContact";
import {UpdateContact} from "../Contacts/UpdateContact/UpdateContact";
import style from "./User.module.css"
import MoreOutlined from "@ant-design/icons/lib/icons/MoreOutlined";

const User = forwardRef(({id, name, deleteContact, updateContact, enableUpdate, getID}, ref) => {

    return (
        <div className={style.contact} ref={ref}>
            <div className={style.info}>
                <span>{name}</span>
            </div>
            <div className={style.card}>
                <div className={style.front}>
                    <MoreOutlined />
                </div>
                <div className={style.back}>
                    <button className={style.call}></button>
                    <InterfaceContact
                        id={id}
                        deleteContact={deleteContact}
                        enableUpdate={enableUpdate}
                        getID={getID}/>
                </div>
            </div>
        </div>
    )
})

export default User