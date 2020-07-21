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
    dispatch(getContactsAC(response.data))
}

export const deleteContact = (id) => async dispatch => {
    await axios.delete('/contacts/' + id)
    dispatch(getContacts())
}
export default connect(mapStateToProps, {getContacts, deleteContact})(Contacts)