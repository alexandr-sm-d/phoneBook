import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import * as axios from "axios";
import {requestState} from "../../redux/store/store";
import {getContactsAC} from "../Contacts/contactsReducer";

const search = () => async dispatch => {
    const response = await axios.get('/contacts')
    const inputStr = requestState().form.search.values.search_name
    let matchContacts = response.data.filter((user)=>{
        return user.name.includes(inputStr)
    })
    console.log(matchContacts)
    dispatch(getContactsAC(matchContacts))
}

const Search = ({search}) => {
    return (
        <div>
            <SearchReduxForm onChange={search}/>
        </div>
    )
}

const SearchForm = props => {
    return (
        <form>
            <Field
                autocomplete="off"
                type="text"
                placeholder="Enter contact"
                component="input"
                name="search_name"
            />
        </form>
    )
}

export const SearchReduxForm = reduxForm({
    form: 'search'
})(SearchForm)

export default connect(null, {search})(Search)