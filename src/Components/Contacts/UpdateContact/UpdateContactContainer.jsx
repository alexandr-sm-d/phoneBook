import {connect} from "react-redux";
import {updateContact, UpdateContact} from "./UpdateContact";

const UpdateContactContainer = connect(null, {updateContact})(UpdateContact)

export default UpdateContactContainer