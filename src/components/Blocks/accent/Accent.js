import React from 'react';
import '../../../css/flex.min.css';
import s from './Accent.module.css';
const Accent = (props) => {

    return (
        <div className="flex-center p-3">
            <p className={s.accent}>
                {props.context}
                 <br/>
            </p>
        </div>
    );
};

export default Accent;