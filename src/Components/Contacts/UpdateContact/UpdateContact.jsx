import React from "react";
import {NewContactReduxForm} from "../NewContact/NewContact";
import * as axios from "axios";
import {getContacts} from "../ContactsContainer";

export const UpdateContact = (props) => {

    return (
        <div>
            <NewContactReduxForm onSubmit={props.updateContact}/>
        </div>
    )
}