import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import * as axios from "axios";
import {requestState} from "../../redux/store/store";
import {getData} from "./authReducer";

const Login = (props) => {
    const login = (formData) => {
        props.login(formData)
    }

    if (props.isAuth) return <Redirect to="/contacts"/>

    return (
        <div>
            <div>You need to login in this app!</div>
            <LoginReduxForm onSubmit={login}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    placeholder="Enter your email"
                    component='input'
                    name={"email"}/>
            </div>
            <div>
                <Field
                    type="text"
                    placeholder="Enter your password"
                    component='input'
                    type="password"
                    name="password"/>
            </div>
            <div>
                <Field
                    type="checkbox"
                    component='input'
                    name={"rememberMe"}/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const login = (formData) => async (dispatch, getState) => {
    const {data: {mail, password}} = await axios.get('/authorization')
    if (mail + password === Object.values(getState().form.login.values).join('')) {
        dispatch(getData())
    }
}

export default connect(mapStateToProps, {login})(Login);
