import React, {useState} from "react";
import NewContact from "../Contacts/NewContact/NewContactContainer";
import Search from "../Search/Search";

const InterfaceApp = props => {
    const [newContactMode, setNewContactMode] = useState(false)
    const [searchMode, setSearchMode] = useState(false)

    return (
        <div>
            {!newContactMode && <button onClick={() => setNewContactMode(true)}>new contact</button>}
            <button onClick={()=>setSearchMode(!searchMode)}>Search</button>
            {searchMode && <Search/>}
            {newContactMode && <NewContact/>}
            {newContactMode && <button onClick={() => setNewContactMode(false)}>Close</button>}
        </div>
    )
}

export default InterfaceApp