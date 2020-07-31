import React, {useState} from "react";
import NewContact from "../Contacts/NewContact/NewContactContainer";
import Search from "../Search/Search";
import {connect} from "react-redux";
import LogOut from "../LogOut/logOut";
import style from './InterfaceApp.module.css'

const InterfaceApp = () => {

    const [newContactMode, setNewContactMode] = useState(false)
    const [searchMode, setSearchMode] = useState(false)
    const togglerSearchMode = () => {
        setSearchMode(!searchMode)
    }

    return (
        <div className={style.header}>
            <div className={style.interfaceApp}>
                <LogOut/>
                {!newContactMode && <button
                    className={style.newContact}
                    onClick={() => setNewContactMode(true)}>N</button>}
                <button
                    className={style.search}
                    onClick={togglerSearchMode}>S</button>
                {searchMode && <Search/>}
                {newContactMode && <NewContact/>}
                {newContactMode && <button
                    className={style.closeNC}
                    onClick={() => setNewContactMode(false)}>C</button>}
            </div>
        </div>
    )
}

export default connect(null)(InterfaceApp)