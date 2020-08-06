import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {getContactsAC, numberSearchMode, stringSearchMode} from "../Contacts/contactsReducer";
import style from './Search.module.css'

const search = () => async (dispatch, getState) => {

    const contacts = JSON.parse(localStorage.getItem('contacts'))
    if (getState().form.search.values === undefined) {
        dispatch(getContactsAC(contacts))
        dispatch(stringSearchMode())
    } else {
        const inputStr = getState().form.search.values.search_name.toLowerCase()
        if (!isNaN(+inputStr)) {
            dispatch(numberSearchMode())
            let matchContacts = contacts.filter((user) => {
                return user.number
                    .split('')
                    .filter((el) => el != '-')
                    .join('')
                    .includes(inputStr)
            })
            dispatch(getContactsAC(matchContacts))
        } else {
            let matchContacts = contacts.filter((user) => {
                return (user.name + user.lastname).toLowerCase().includes(inputStr)
            })
            dispatch(getContactsAC(matchContacts))
        }
    }
}

const Search = ({search}) => {
    return <SearchReduxForm onChange={search}/>
}

const SearchForm = props => {
    return (
        <form className={style.searchForm}>
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