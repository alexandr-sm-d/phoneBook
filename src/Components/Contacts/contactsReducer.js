const GET_CONTACTS = 'GET_CONTACTS'

let initialState = {
    contacts: []
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS: {
            return {
                ...state,
                contacts: [...state.contacts, ...action.contacts]
            }
        }
        default:
            return state;
    }
}

export const getContactsAC = (contacts) => ({type: GET_CONTACTS, contacts})
export default contactsReducer;