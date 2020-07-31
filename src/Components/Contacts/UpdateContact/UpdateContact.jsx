import React from "react";
import {Field, reduxForm} from "redux-form";
import style from './UpdateContact.module.css'

export const UpdateContact = ({id, updateContact, setEditMode}) => {

    const submit = formData => {
        updateContact(formData, id)
        setEditMode(false)
    }

    return (
        <div className={style.updateContactContainer}>
            <UpdateContactReduxForm onSubmit={submit}/>
        </div>
    )
}

const UpdateContactForm = props => {
    return (
        <div className={style.updateForm}>
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
        </div>
    )
}

export const UpdateContactReduxForm = reduxForm({
    form: 'update_contact'
})(UpdateContactForm)