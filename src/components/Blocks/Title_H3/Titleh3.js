import React from 'react';
import s from './Title.module.css'
import '../../../css/flex.min.css';

const Titleh3 = (props) => {

    return (
        <div className="flex-center p-3">
            <h3 className={s.title}>{props.name}
                <p className={s.subtitle}>
                    {props.subname}
                </p>
            </h3>
        </div>
    );
};

export default Titleh3;