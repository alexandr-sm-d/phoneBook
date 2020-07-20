import * as axios from "axios";

const GET_CONTACTS = 'GET_CONTACTS'

let initialState = {
    contacts: [{id: 1, name: 'alex'}, {id: 2, name: 'vlad'}]
}

export const getContactsAC = (contacts) => ({type: GET_CONTACTS, contacts})


const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS: {
            debugger
            return {
                ...state,
                contacts: [...state.contacts, ...action.contacts]
            }
        }
        default:
            return state;
    }
}

export default contactsReducer;