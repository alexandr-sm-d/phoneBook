import React from "react";
import {Field, reduxForm} from "redux-form";

export const UpdateContact = ({id, updateContact, setEditMode}) => {

    const submit = formData => {
        updateContact(formData, id)
        setEditMode(false)
    }

    return (
        <div>
            <UpdateContactReduxForm onSubmit={submit}/>
        </div>
    )
}

const UpdateContactForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            update contact:
            <Field
                autocomplete="off"
                type="text"
                placeholder="Enter your name"
                component="input"
                name="name"
            />
            <button>Save Contact</button>
        </form>
    )
}

export const UpdateContactReduxForm = reduxForm({
    form: 'update_contact'
})(UpdateContactForm)