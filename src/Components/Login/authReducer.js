const GET_DATA_APP = 'GET_DATA'
const DELETE_DATA_APP = 'DELETE_DATA'
const ERROR_AUTHORIZATION = 'ERROR_AUTHORIZATION'

let initialState = {
    isAuth: false,
    errorLogin: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_APP: {
            return {
                ...state,
                isAuth: true
            }
        }
        case DELETE_DATA_APP: {
            return {
                ...state,
                isAuth: false
            }
        }
        case ERROR_AUTHORIZATION: {
            return {
                ...state,
                errorLogin: action.error
            }
        }
        default:
            return state;
    }
}

export const getData = () => ({type: GET_DATA_APP})
export const deleteData = () => ({type: DELETE_DATA_APP})
export const errorAuth = (error) =>({type: ERROR_AUTHORIZATION, error})

export default authReducer