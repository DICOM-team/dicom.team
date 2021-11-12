import React from 'react';
import s from './CardButton.module.css'

const CardButton = (props) => {
    let bgr= props.img
    return (
        <div>
            <div className={s.body} style={{backgroundImage: `url(${process.env.PUBLIC_URL + bgr})`,
                                            backgroundSize: 'contain'}}>
                {/*{props.number}*/}
            </div>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    );
};

export default CardButton;