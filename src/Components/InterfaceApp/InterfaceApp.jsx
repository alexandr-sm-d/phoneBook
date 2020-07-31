import React, {useState} from "react";
import Search from "../Search/Search";
import {connect} from "react-redux";
import LogOut from "../LogOut/logOut";
import style from './InterfaceApp.module.css'
import * as axios from "axios";
import {getContacts} from "../Contacts/ContactsContainer";
import {NewContact} from "../Contacts/NewContact/NewContact";

export const addContact = (formData) => async dispatch => {
    await axios.post('/contacts', formData)
    dispatch(getContacts())
}

const InterfaceApp = ({addContact}) => {

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
                {newContactMode && <NewContact addContact={addContact} setNewContactMode={setNewContactMode}/>}
                {newContactMode && <button
                    className={style.closeNC}
                    onClick={() => setNewContactMode(false)}>C</button>}
            </div>
        </div>
    )
}

export default connect(null, {addContact})(InterfaceApp)