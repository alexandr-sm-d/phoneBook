import React from 'react';
import User from "../User/User";
import FlipMove from "react-flip-move";
import style from "./Contacts.module.css";

class Contacts extends React.Component {

    componentDidMount() {
        this.props.getContacts()
    }

    render() {
        // let props = this.props;
        let {contacts} = this.props.contacts;
        // debugger
        return (
            <div className={style.contacts}>
                <FlipMove>
                    {contacts.map((user) =>
                        <User key={user.id} name={user.name} id={user.id}
                              lastname={user.lastname}
                              deleteContact={this.props.deleteContact}
                              updateContact={this.props.updateContact}
                              enableUpdate={this.props.enableUpdate}
                              getID={this.props.getID}
                        />)}
                </FlipMove>
            </div>
        )
    }
}

export default Contacts;