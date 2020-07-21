import {connect} from "react-redux";
import {addContact, NewContact} from "./NewContact";

const NewContactContainer = connect(null, {addContact})(NewContact)

export default NewContactContainer