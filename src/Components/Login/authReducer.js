const GET_DATA_APP = 'GET_DATA'
const DELETE_DATA_APP = 'DELETE_DATA'
let initialState = {
    isAuth: false
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
        default:
            return state;
    }
}

export const getData = () => ({type: GET_DATA_APP})
export const deleteData = () => {
    return {type: DELETE_DATA_APP}
}
export default authReducer