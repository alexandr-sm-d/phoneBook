import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import * as axios from "axios";
import {getData} from "./authReducer";
import style from "./Login.module.css"
import icon from "./../../images/unnamed.jpg"

const Login = (props) => {
    const login = (formData) => {
        props.login(formData)
    }

    if (props.isAuth) return <Redirect to="/contacts"/>

    return <LoginReduxForm onSubmit={login}/>
}

const LoginForm = (props) => {
    return (
        <div className={style.loginbox}>
            <img src={icon} className={style.avatar}/>
            <h2>Sign in to PhoneBook</h2>
            <form onSubmit={props.handleSubmit}>
                <p>Username</p>
                <Field
                    // autocomplete='off'
                    required
                    type="email"
                    placeholder="Enter Username"
                    component='input'
                    name={"email"}/>
                <p>User password</p>
                <Field
                    required
                    type="password"
                    placeholder="Enter Password"
                    component='input'
                    type="password"
                    name="password"/>
                <div>
                    <button>Sign in</button>
                </div>
            </form>
        </div>
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
