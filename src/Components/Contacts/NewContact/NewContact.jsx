import React from "react";
import {Field, reduxForm} from "redux-form";


class NewContactContainer extends React.Component {
    render() {
        return (
            <NewContact />
        )
    }
}
const NewContact = props => {

    const submit = (formData) => {
        alert('form submit')
        console.info(formData)
        props.addContact(formData)
    }

    return (
        <div>
            <NewContactReduxForm onSubmit={submit}/>
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

export default NewContact
