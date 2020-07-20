import React from 'react';
import User from "../User/User";

class Contacts extends React.Component {
    componentDidMount() {
        this.props.getContactsTC()
    }

    render() {
        let {contacts} = this.props.contacts
        return (
            <div>
                {contacts.map((user) => <User key={user.id} name={user.name}/>)}
            </div>
        )
    }
}

export default Contacts;