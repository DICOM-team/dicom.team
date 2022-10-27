import React from 'react';
import s from './DicomButton.module.css'

const DicomButton = (props) => {
    return (
        <div>
            <button style={{backgroundColor: props.color}} {...props} className={s.button}></button>
        </div>
    );
};

export default DicomButton;