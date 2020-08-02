const GET_CONTACTS = 'GET_CONTACTS'
const ENABLE_UPDATE_MODE = 'ENABLE_UPDATE_MODE'
const GET_ID = 'GET_ID'
const DISABLE_UPDATE_MODE = 'DISABLE_UPDATE_MODE'

let initialState = {
    contacts: [],
    isUpdateContactMode: false,
    id: null
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS: {
            return {
                ...state,
                contacts: [...action.contacts]
            }
        }
        case ENABLE_UPDATE_MODE: {
            // debugger
            return {
                ...state,
                isUpdateContactMode: true
            }
        }
        case DISABLE_UPDATE_MODE: {
            return {
                ...state,
                isUpdateContactMode: false
            }
        }
        case GET_ID: {
            return {
                ...state,
                id: action.id
            }
        }
        default:
            return state;
    }
}

export const getContactsAC = (contacts) => ({type: GET_CONTACTS, contacts})
export const enableUpdate = () => ({type: ENABLE_UPDATE_MODE})
export const disableUpdate = () => ({type: DISABLE_UPDATE_MODE})
export const getID = (id) => ({type: GET_ID, id})

export default contactsReducer;