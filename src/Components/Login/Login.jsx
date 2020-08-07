import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import * as axios from "axios";
import {errorAuth, getData} from "./authReducer";
import style from "./Login.module.css"
import icon from "./../../images/unnamed.jpg"

const Login = (props) => {
    const login = (formData) => {
        props.login(formData)
    }

    if (props.isAuth) return <Redirect to="/contacts"/>

    return <LoginReduxForm onSubmit={login} errorLogin={props.errorLogin}/>
}

const LoginForm = (props) => {
    return (
        <div className={style.loginbox}>
            <img src={icon} className={style.avatar} alt=''/>
            <h2>Sign in to PhoneBook</h2>
            <form onSubmit={props.handleSubmit}>
                <p>Username</p>
                <Field
                    required
                    type="email"
                    placeholder="Enter Username"
                    component='input'
                    name={"email"}/>
                <p>User password</p>
                <Field
                    required
                    placeholder="Enter Password"
                    component='input'
                    type="password"
                    name="password"/>
                {props.errorLogin && <div className={style.errorMessage}>
                    {props.errorLogin}
                </div>}
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
    errorLogin: state.auth.errorLogin
})

const login = (formData) => async (dispatch, getState) => {
    const {data: {mail, password, error}} = await axios.get('/authorization')
    if (mail + password === Object.values(getState().form.login.values).join('')) {
        dispatch(getData())
    } else {
        dispatch(errorAuth(error))
        setTimeout(() => dispatch(errorAuth('')), 2000)
    }
}

export default connect(mapStateToProps, {login, errorAuth})(Login);
