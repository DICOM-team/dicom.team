import React from "react";
import s from './PopUp.module.css';

const Popup = props => {
    return (
        <div className={s.popupBox}>
            <div className={s.box}>
                <span className={s.closeIcon} onClick={props.handleClose}>x</span>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    );
};

export default Popup;