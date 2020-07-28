import Contacts from "./Contacts";
import {connect} from "react-redux";
import {getContactsAC} from "./contactsReducer"
import * as axios from "axios";

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export const getContacts = () => async dispatch => {
    const response = await axios.get('/contacts')
    localStorage.setItem('contacts', JSON.stringify(response.data))
    dispatch(getContactsAC(JSON.parse(localStorage.getItem('contacts'))))
}

export const deleteContact = (id) => async dispatch => {
    await axios.delete('/contacts/' + id)
    dispatch(getContacts())
}

export const updateContact = (formData, id) => async dispatch => {
    await axios.put('/contacts/' + id, formData)
    dispatch(getContacts())
}


export default connect(mapStateToProps, {getContacts, deleteContact, updateContact})(Contacts)