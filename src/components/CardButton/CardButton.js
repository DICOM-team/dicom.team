import React from 'react';
import s from './CardButton.module.css'
import './../../css/flex.min.css';

const CardButton = (props) => {
    let bgr= props.img
    return (
        <div className="flex-center p-3">
            <div className={s.cardHover}>
            <div className={s.body} style={{backgroundImage: `url(${process.env.PUBLIC_URL + bgr})`,
                                            backgroundSize: 'contain'}}>
                {/*{props.number}*/}
            </div>
            <div className={s.name}>
                {props.name}
            </div>
            </div>
        </div>
    );
};

export default CardButton;