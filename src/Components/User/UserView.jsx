import React from "react";
import style from './UserView.module.css'
import icon from "../../images/unnamed.jpg";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";

const UserView = ({disableViewMode, ...props}) => {
    return (
        <div className={style.viewContainer}>
            <div className={style.viewMode}>
                <img src={icon} className={style.avatar}/>
                <p>Name: {props.name}</p>
                <p>Lastname: {props.lastname}</p>
                <p>Number: {props.number}</p>
                <button onClick={disableViewMode} className={style.close}>
                    <CloseOutlined />
                </button>
            </div>
        </div>

    )
}

export default UserView