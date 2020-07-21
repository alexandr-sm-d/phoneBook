import React from "react";
import {NewContactReduxForm} from "../NewContact/NewContact";

// export const UpdateContact = (props) => {
//     debugger
//     return (
//         <div>
//             <NewContactReduxForm onSubmit={props.updateContact}/>
//         </div>
//     )
// }

export const UpdateContact = (props) => {
    debugger
    function wrap(id) {
        debugger
        return props.updateContact
    }

    return (
        <div>
            <NewContactReduxForm onSubmit={wrap(props.id)}/>
        </div>
    )
}