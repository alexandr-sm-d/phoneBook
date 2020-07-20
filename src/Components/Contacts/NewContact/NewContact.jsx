import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as axios from "axios";
import {getContactsTC} from "../ContactsContainer";

const NewContact = ({addContact}) => {
    return (
        <div>
            <NewContactReduxForm onSubmit={addContact}/>
        </div>
    )
}

const NewContactForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            new contact form
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

const NewContactReduxForm = reduxForm({
    form: 'new_contact'
})(NewContactForm)

const addContact = (formData) => async dispatch => {
    await axios.post('/contacts', formData)
    dispatch(getContactsTC())
}

const NewContactContainer = connect(null, {addContact})(NewContact)

export default NewContactContainer
