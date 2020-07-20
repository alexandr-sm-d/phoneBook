import React from "react";
import Contacts from "../Contacts/ContactsContainer";
import InterfaceApp from "../InterfaceApp/InterfaceApp";

const Content = props => {
    return (
        <div>
            <InterfaceApp/>
            <Contacts/>
        </div>
    )
}

export default Content