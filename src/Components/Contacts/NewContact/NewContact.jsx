import React from "react";
import {Field, reduxForm} from "redux-form";
import style from './NewContact.module.css'


export const NewContact = ({addContact, setNewContactMode}) => {
    const submit = (formData) => {
        addContact(formData)
        setNewContactMode(false)
    }

    return (
        <div className={style.newContactContainer}>
            <NewContactReduxForm onSubmit={submit}/>
        </div>
    )
}

const NewContactForm = props => {
    return (
        <div className={style.loginbox}>
            <h3>New Contact:</h3>
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

export const NewContactReduxForm = reduxForm({
    form: 'new_contact'
})(NewContactForm)



