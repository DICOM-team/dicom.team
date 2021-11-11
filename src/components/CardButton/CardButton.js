import React from 'react';
import s from './CardButton.module.css'

const CardButton = (props) => {
    return (
        <div className={s.body}>
            {props.number}
        </div>
    );
};

export default CardButton;