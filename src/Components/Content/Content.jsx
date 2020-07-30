import React from "react";
import Contacts from "../Contacts/ContactsContainer";
import InterfaceApp from "../InterfaceApp/InterfaceApp";
import style from "./Content.module.css";

const Content = props => {
    return (
        <div className={style.container}>
            <InterfaceApp/>
            <Contacts/>
        </div>
    )
}

export default Content