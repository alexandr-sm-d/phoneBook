import React, {useState} from "react";
import NewContact from "../Contacts/NewContact/NewContactContainer";
import Search from "../Search/Search";
import {connect} from "react-redux";
import {getContacts} from "../Contacts/ContactsContainer";
import {deleteData} from "../Login/authReducer";
import LogOut from "../LogOut/logOut";

const InterfaceApp = ({getContacts}) => {

    const [newContactMode, setNewContactMode] = useState(false)
    const [searchMode, setSearchMode] = useState(false)
    const togglerSearchMode = () => {
        setSearchMode(!searchMode)
        getContacts()
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

export default connect(null, {getContacts})(InterfaceApp)