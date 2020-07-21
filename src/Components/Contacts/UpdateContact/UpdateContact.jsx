import * as axios from "axios";
import {getContacts} from "../ContactsContainer";
import React from "react";
import {NewContactReduxForm} from "../NewContact/NewContact";

export const updateContact = (formData) => async dispatch => {
    alert('update')
    await axios.put('/contacts/1', formData)
    dispatch(getContacts())
}

export const UpdateContact = (props) => {
    debugger
    return (
        <div>
            <NewContactReduxForm onSubmit={props.updateContact}/>
        </div>
    )
}