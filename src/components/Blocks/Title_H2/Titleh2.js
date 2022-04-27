import React from 'react';
import s from './Title.module.css'
import '../../../css/flex.min.css';

const Titleh2 = (props) => {

    return (
        <div className="flex-center p-3">
            <h2 className={s.title}>{props.name}
                <p className={s.subtitle}>
                    {props.subname}
                </p>
            </h2>
        </div>
    );
};

export default Titleh2;