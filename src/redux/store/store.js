import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import contactsReducer from "../../Components/Contacts/contactsReducer";
import authReducer from "../../Components/Login/authReducer";

let reducersLits = combineReducers({
    contacts: contactsReducer,
    auth: authReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersLits, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export const requestState = () => store.getState()
window.store = store;
export default store;