import React from "react";
import {deleteData} from "../Login/authReducer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import style from './logOut.module.css'

const LogOut = ({isAuth, deleteData}) => {

    // if (!isAuth) return <Redirect to="/login"/>

    return <button
        onClick={deleteData}
        className={style.logout}>L</button>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {deleteData})(LogOut)
