import React from "react";
import {Field, reduxForm} from "redux-form";
import * as axios from "axios";
import {getContacts} from "../ContactsContainer";

export const addContact = (formData) => async dispatch => {
    await axios.post('/contacts', formData)
    dispatch(getContacts())
}

export const NewContact = ({addContact}) => {
    return (
        <div>
            <NewContactReduxForm onSubmit={addContact}/>
        </div>
    )
}

const NewContactForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            new contact:
            <Field
                type="text"
                placeholder="Enter your name"
                component="input"
                name="name"
            />
            <button>Save Contact</button>
        </form>
    )
}

export const NewContactReduxForm = reduxForm({
    form: 'new_contact'
})(NewContactForm)