import React, {forwardRef} from 'react';
import InterfaceContact from "../InterfaceContact/InterfaceContact";
import style from "./User.module.css"
import MoreOutlined from "@ant-design/icons/lib/icons/MoreOutlined";
import ReactDOM from 'react-dom'
import UserView from "./UserView";

const User = forwardRef(({
                             id, name, lastname, number,
                             deleteContact, updateContact,
                             enableUpdate, getID, idView,
                             isNumberSearchMode, enableViewMode,
                             disableViewMode, isViewMode
                         }, ref) => {

    const viewMode = () => {
        enableViewMode(id)
    }

    return (
        <div className={style.contact} ref={ref}>
            <div className={style.info} onClick={viewMode}>
                <div><span>{name} {lastname} </span>
                    {isNumberSearchMode && <span className={style.number}>({number})</span>}
                </div>
            </div>
            <div className={style.card}>
                <div className={style.front}>
                    <MoreOutlined/>
                </div>
                <div className={style.back}>
                    <InterfaceContact
                        id={id}
                        deleteContact={deleteContact}
                        enableUpdate={enableUpdate}
                        getID={getID}/>
                </div>
            </div>
            {(id === idView) && isViewMode && <Modal>
                <UserView name={name} lastname={lastname}
                          number={number}
                          disableViewMode={disableViewMode}/>
            </Modal>}
        </div>
    )
})

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.style.position = 'absolute'
        this.el.style.zIndex = '3'
    }

    componentDidMount() {
        document.body.prepend(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

export default User