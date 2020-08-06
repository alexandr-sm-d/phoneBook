import Contacts from "./Contacts";
import {enableUpdate, getContactsAC, getID} from "./contactsReducer"
import {connect} from "react-redux";
import * as axios from "axios";

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        isNumberSearchMode: state.contacts.isNumberSearchMode,
    }
}

export const getContacts = () => async dispatch => {
    const response = await axios.get('/contacts')
    localStorage.setItem('contacts', JSON.stringify(response.data))
    dispatch(getContactsAC(JSON.parse(localStorage.getItem('contacts'))))
}

export const deleteContact = (id) => async dispatch => {
    debugger
    await axios.delete('/contacts/' + id)
    dispatch(getContacts())
}

export default connect(mapStateToProps,
    {getContacts, deleteContact, enableUpdate, getID})
(Contacts)