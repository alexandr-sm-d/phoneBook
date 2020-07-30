import React from 'react';
import User from "../User/User";
import FlipMove from "react-flip-move";
import style from "./Contacts.module.css";

class Contacts extends React.Component {

    componentDidMount() {
        this.props.getContacts()
    }

    render() {
        let {contacts} = this.props.contacts
        return (
            <div className={style.contacts}>
                <FlipMove>
                    {contacts.map((user) =>
                        <User key={user.id} name={user.name} id={user.id}
                              deleteContact={this.props.deleteContact}
                              updateContact={this.props.updateContact}
                        />)}
                </FlipMove>
            </div>
        )
    }
}

export default Contacts;