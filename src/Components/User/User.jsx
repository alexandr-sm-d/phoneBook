import React from 'react';

const User = ({id, name, deleteContact}) => {
    return (
        <div>
            {name}
            <button onClick={() => deleteContact(id)}>Delete</button>
        </div>
    )
}

export default User