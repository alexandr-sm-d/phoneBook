const GET_DATA = 'GET_DATA'

let initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const getData = () => ({type: GET_DATA})
export default authReducer