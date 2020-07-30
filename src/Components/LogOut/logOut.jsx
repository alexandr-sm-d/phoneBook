import React from "react";
import {deleteData} from "../Login/authReducer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const LogOut = ({isAuth, deleteData}) => {

    // if (!isAuth) return <Redirect to="/login"/>

    return (
        <div>
            <button onClick={deleteData}>Log Out</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {deleteData})(LogOut)
