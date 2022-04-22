import React from 'react'
import s from './WhiteBlock.module.css'

const WhiteBlock = (props) => {
    return (
        <div className={s.block}>
            {props.content}
        </div>
    );
}

export default WhiteBlock;