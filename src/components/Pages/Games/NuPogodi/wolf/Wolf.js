import React from 'react';
import s from "../NuPogodi.module.css";

const Wolf = (props) => {
    if (props.position===1) {
        return (
        <div id={'wolf'} className={s.wolf}>  {/*Волк*/}
            <img src="/images/wolf/1.png"/>
        </div>
        )
    } else if (props.position===2) {
        return (
        <div id={'wolf'} className={s.wolf}>  {/*Волк*/}
            <img src="/images/wolf/2.png"/>
        </div>
        )
    } else if (props.position===3) {
        return (
        <div id={'wolf'} className={s.wolf}>  {/*Волк*/}
            <img src="/images/wolf/3.png"/>
        </div>
        )
    } else {
        return (
        <div id={'wolf'} className={s.wolf}>  {/*Волк*/}
            <img src="/images/wolf/4.png"/>
        </div>
        )
    }
};

export default Wolf;