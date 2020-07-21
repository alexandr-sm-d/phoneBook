import React from 'react';
import User from "../User/User";

class Contacts extends React.Component {
    componentDidMount() {
        this.props.getContacts()
    }

    render() {
        let {contacts} = this.props.contacts
        return (
            <div>
                {contacts.map((user) =>
                    <User key={user.id} name={user.name} id={user.id}
                          deleteContact={this.props.deleteContact}
                          updateContact={this.props.updateContact}
                    />)}
            </div>
        )
    }
}

export default Contacts;