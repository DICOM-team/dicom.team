import React from 'react';
import '../../../css/flex.min.css';
import s from './Separator.module.css';
const Separator = (props) => {

    return (
        <div className="flex-center p-3">
            <div className={s.line}></div>
        </div>
    );
};

export default Separator;