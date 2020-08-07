const GET_CONTACTS = 'GET_CONTACTS'
const ENABLE_UPDATE_MODE = 'ENABLE_UPDATE_MODE'
const GET_ID = 'GET_ID'
const DISABLE_UPDATE_MODE = 'DISABLE_UPDATE_MODE'
const NUMBER_SEARCH_MODE = 'NUMBER_SEARCH_MODE'
const STRING_SEARCH_MODE = 'STRING_SEARCH_MODE'
const ENABLE_VIEW_MODE = 'ENABLE_VIEW_MODE'
const DISABLE_VIEW_MODE = 'DISABLE_VIEW_MODE'

let initialState = {
    contacts: [],
    isUpdateContactMode: false,
    id: null,
    isNumberSearchMode: false,
    isViewMode: false,
    idView: null
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
        case NUMBER_SEARCH_MODE: {
            return {
                ...state,
                isNumberSearchMode: true
            }
        }
        case STRING_SEARCH_MODE: {
            return {
                ...state,
                isNumberSearchMode: false
            }
        }
        case ENABLE_VIEW_MODE: {
            return {
                ...state,
                isViewMode: true,
                idView: action.id
            }
        }
        case DISABLE_VIEW_MODE: {
            return {
                ...state,
                isViewMode: false,
                idView: null
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
export const numberSearchMode = () => ({type: NUMBER_SEARCH_MODE})
export const stringSearchMode = () => ({type: STRING_SEARCH_MODE})
export const enableViewMode = (id) => ({type: ENABLE_VIEW_MODE, id})
export const disableViewMode = () => ({type: DISABLE_VIEW_MODE})

export default contactsReducer;