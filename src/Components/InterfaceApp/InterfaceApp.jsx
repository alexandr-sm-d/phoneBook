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
        <div>
            <LogOut/>
            {!newContactMode && <button onClick={() => setNewContactMode(true)}>new contact</button>}
            <button onClick={togglerSearchMode}>Search</button>
            {searchMode && <Search/>}
            {newContactMode && <NewContact/>}
            {newContactMode && <button onClick={() => setNewContactMode(false)}>Close</button>}
        </div>
    )
}

export default connect(null)(InterfaceApp)