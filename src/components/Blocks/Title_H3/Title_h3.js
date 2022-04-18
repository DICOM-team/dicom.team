import React from 'react';
import s from './Title.module.css'
import '../../../css/flex.min.css';

const Title_h3 = (props) => {

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

export default Title_h3;