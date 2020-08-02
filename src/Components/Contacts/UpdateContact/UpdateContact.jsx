import React from "react";
import {Field, reduxForm} from "redux-form";
import style from './UpdateContact.module.css'


export const UpdateContact = ({id, updateContact, disableUpdate}) => {

    const submit = formData => {
        updateContact(formData, id)
        disableUpdate()
    }

    return (
        <div className={style.updateContactContainer}>
            <UpdateContactReduxForm onSubmit={submit}/>
        </div>
    )
}

const UpdateContactForm = props => {
    return (
        <div className={style.loginbox}>
            <h3>Update Contact:</h3>
            <form onSubmit={props.handleSubmit}>
                <p>Phone Number</p>
                <small>Format: 8-999-999-9999</small>
                <Field
                    pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    type="tel"
                    autocomplete='off'
                    required
                    placeholder="Enter your number"
                    component='input'
                    name="number"/>
                <p>Name</p>
                <Field
                    autocomplete='off'
                    required
                    placeholder="Enter your name"
                    component='input'
                    name="name"/>
                <p>Last Name</p>
                <Field
                    autocomplete='off'
                    placeholder="Enter your lastname"
                    component='input'
                    name="lastname"/>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

export const UpdateContactReduxForm = reduxForm({
    form: 'update_contact'
})(UpdateContactForm)