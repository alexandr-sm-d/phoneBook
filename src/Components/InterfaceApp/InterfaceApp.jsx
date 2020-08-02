import React, {useRef, useState} from "react";
import Search from "../Search/Search";
import {connect} from "react-redux";
import LogOut from "../LogOut/logOut";
import style from './InterfaceApp.module.css'
import * as axios from "axios";
import {getContacts} from "../Contacts/ContactsContainer";
import {NewContact} from "../Contacts/NewContact/NewContact";
import {UpdateContact} from "../Contacts/UpdateContact/UpdateContact";
import {disableUpdate} from "../Contacts/contactsReducer";
import {Transition, config} from "react-spring/renderprops-universal";

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
    const myRef = useRef(null)

    return (
        <div className={style.header}>
            <div className={style.interfaceApp}>
                <LogOut/>
                {!newContactMode && <button
                    className={style.newContact}
                    onClick={() => setNewContactMode(true)}>N</button>}
                <button
                    className={style.search}
                    onClick={() => setSearchMode(!searchMode)}>S
                </button>
                <Transition
                    items={searchMode}
                    enter={{opacity: 1, transform: "translateY(0rem)"}}
                    leave={{opacity: 0, transform: "translateY(-2rem)"}}
                    from={{opacity: 0, transform: "translateY(-2rem)"}}
                    config={config.wobbly}>
                    {item => item && (
                        props => <div style={props}>{<Search/>}</div>
                    )}
                </Transition>
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