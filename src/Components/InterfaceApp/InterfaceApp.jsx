import React, {useState} from "react";
import Search from "../Search/Search";
import {connect} from "react-redux";
import LogOut from "../LogOut/logOut";
import style from './InterfaceApp.module.css'
import * as axios from "axios";
import {getContacts} from "../Contacts/ContactsContainer";
import {NewContact} from "../Contacts/NewContact/NewContact";
import {UpdateContact} from "../Contacts/UpdateContact/UpdateContact";
import {disableUpdate} from "../Contacts/contactsReducer";
import {Spring} from "react-spring/renderprops-universal";

export const addContact = (formData) => async dispatch => {
    await axios.post('/contacts', formData)
    dispatch(getContacts())
}

export const updateContact = (formData, id) => async dispatch => {
    await axios.put('/contacts/' + id, formData)
    dispatch(getContacts())
}

const mapStateToProps = (state) => ({
    isUpdateContactMode: state.contacts.isUpdateContactMode,
    id: state.contacts.id
})

const InterfaceApp = ({addContact, ...props}) => {
    // debugger
    const [newContactMode, setNewContactMode] = useState(false)
    const [searchMode, setSearchMode] = useState(false)
    const togglerSearchMode = () => setSearchMode(!searchMode)

    return (
        <div className={style.header}>
            <div className={style.interfaceApp}>
                <LogOut/>
                {!newContactMode && <button
                    className={style.newContact}
                    onClick={() => setNewContactMode(true)}>N</button>}
                <button
                    className={style.search}
                    onClick={togglerSearchMode}>S
                </button>
                <Spring
                    reset={true}
                    from={{opacity: 0, transform: "translateY(-2rem)"}}
                    to={{opacity: 1, transform: "translateY(0rem)"}}
                    reverse={!searchMode}
                    config={{duration: 200}}>
                    {props => <div style={props}>{<Search/>}</div>}
                </Spring>
                {newContactMode && <NewContact addContact={addContact} setNewContactMode={setNewContactMode}/>}
                {props.isUpdateContactMode && <UpdateContact
                    id={props.id}
                    updateContact={props.updateContact}
                    disableUpdate={props.disableUpdate}
                />}
                {newContactMode && <button
                    className={style.closeNC}
                    onClick={() => setNewContactMode(false)}>C</button>}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, {addContact, updateContact, disableUpdate})(InterfaceApp)