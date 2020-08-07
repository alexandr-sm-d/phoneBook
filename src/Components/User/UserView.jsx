import React from "react";
import style from './UserView.module.css'
import icon from "../../images/unnamed.jpg";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";

const UserView = ({disableViewMode, ...props}) => {
    return (
        <div className={style.viewContainer}>
            <div className={style.viewMode}>
                <img src={icon} className={style.avatar} alt=''/>
                <p><span>Name</span>: {props.name}</p>
                <p><span>Lastname</span>: {props.lastname}</p>
                <p><span>Number</span>: {props.number}</p>
                <button onClick={disableViewMode} className={style.close}>
                    <CloseOutlined />
                </button>
            </div>
        </div>

    )
}

export default UserView