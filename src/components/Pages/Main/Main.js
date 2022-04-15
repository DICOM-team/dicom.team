import React from 'react';
import CardButton from "../../CardButton/CardButton";
import {Link} from "react-router-dom";
import {mainMenu} from "../../../State/State";
import s from './Main.module.css';
const Main = () => {

    const Cardbuttons = mainMenu.items.map( (item) => {
        return (
            <div className={s.card + " col-6 col-md-4 col-xl-3"}><Link to={item.urm}><CardButton name={item.name} img={item.img}/></Link></div>
        )
    })

    return (
        <div className="App">
            <div className={s.CardsButtons + ' row'}>
                {Cardbuttons}
            </div>
        </div>
    );
};

export default Main;