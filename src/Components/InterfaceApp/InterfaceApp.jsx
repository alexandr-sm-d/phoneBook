import React, {useState} from "react";
import NewContact from "../Contacts/NewContact/NewContactContainer";

const InterfaceApp = props => {
    const [newContactMode, setNewContactMode] = useState(false)

    return (
        <div>
            {!newContactMode && <button onClick={() => setNewContactMode(true)}>new contact</button>}
            {newContactMode && <NewContact/>}
            {newContactMode && <button onClick={()=>setNewContactMode(false)}>Close</button>}
        </div>
    )
}

export default InterfaceApp