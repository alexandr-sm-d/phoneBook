import React from 'react';
import User from "../User/User";
import FlipMove from "react-flip-move";
import style from "./Contacts.module.css";

class Contacts extends React.Component {

    componentDidMount() {
        this.props.getContacts()
    }

    render() {
        let {contacts} = this.props.contacts;
        return (
            <div className={style.contacts}>
                <FlipMove>
                    {contacts.map((user) =>
                        <User key={user.id} name={user.name} id={user.id}
                              lastname={user.lastname}
                              number={user.number}
                              idView={this.props.idView}
                              deleteContact={this.props.deleteContact}
                              updateContact={this.props.updateContact}
                              enableUpdate={this.props.enableUpdate}
                              getID={this.props.getID}
                              isNumberSearchMode={this.props.isNumberSearchMode}
                              enableViewMode={this.props.enableViewMode}
                              disableViewMode={this.props.disableViewMode}
                              isViewMode={this.props.isViewMode}
                        />)}
                </FlipMove>
            </div>
        )
    }
}

export default Contacts;