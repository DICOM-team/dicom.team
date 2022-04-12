import React, { useState } from 'react';
import s from './ButtonForm.module.css'
import '../../../css/flex.min.css';
import Popup from "../../PopUp/Popup";

const ButtonForm = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="flex-center p-3">
            <button className={s.button} onClick={togglePopup}>
                {props.name}
            </button>
            {/*Контекст popup*/}
            {isOpen && <Popup
                content={props.content}
                handleClose={togglePopup}
            />}
        </div>
    );
};

export default ButtonForm;