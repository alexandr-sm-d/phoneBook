import React from "react";
import {NewContactReduxForm} from "../NewContact/NewContact";

export const UpdateContact = ({id, updateContact, setEditMode}) => {

    const submit = formData => {
        updateContact(formData, id)
        setEditMode(false)
    }

    return (
        <div>
            <NewContactReduxForm onSubmit={submit}/>
        </div>
    )
}