import React from "react";
import {Field, reduxForm} from "redux-form";
import style from './NewContact.module.css'
import icon from "../../../images/unnamed.jpg";

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
            <h2>New Contact:</h2>
            <form onSubmit={props.handleSubmit}>
                <p>Name</p>
                <Field
                    autocomplete='off'
                    required
                    placeholder="Enter your name"
                    component='input'
                    name="name"/>
                <div>
                    <button>Save Contact</button>
                </div>
            </form>
        </div>
    )
}

export const NewContactReduxForm = reduxForm({
    form: 'new_contact'
})(NewContactForm)



