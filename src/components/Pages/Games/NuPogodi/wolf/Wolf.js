import React from 'react';
import s from "../NuPogodi.module.css";

const Wolf = (props) => {
    let scr = '/images/wolf/' + props.position + '.png'
        return (
        <div id={'wolf'} className={s.wolf}>  {/*Волк*/}
            <img src={scr} alt={'Волк из игры "Ну погоди"'}/>
        </div>
        )
};

export default Wolf;