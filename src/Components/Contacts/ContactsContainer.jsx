import Contacts from "./Contacts";
import {connect} from "react-redux";
import {getContactsAC} from "./contactsReducer"
import * as axios from "axios";

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export const getContactsTC = () => async dispatch => {
    const response = await axios.get('/contacts')
    dispatch(getContactsAC(response.data))
}
export default connect(mapStateToProps, {getContactsTC})(Contacts)