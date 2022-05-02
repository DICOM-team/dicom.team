import React from 'react';
import '../../../css/flex.min.css';
import s from './Separator.module.css';
const Separator = () => {

    return (
        <div className="flex-center">
            <div className={s.line}></div>
        </div>
    );
};

export default Separator;