import React from 'react';
import logo from "../../../img/logo.svg";
import CardButton from "../../CardButton/CardButton";
import {Link} from "react-router-dom";
import s from './Main.module.css'
import {mainMenu} from "../../../State/State";

const Main = () => {

    const Cardbuttons = mainMenu.items.map( (item) => {
        return (
            <Link to={item.urm}><CardButton name={item.name} img={item.img}/></Link>
        )
    })

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <div className={s.logo}>
                        <img src={logo} alt="DICOM компания"/>
                    </div>
                    <div className={'CardsButtons'}>
                        {Cardbuttons}
                    </div>
                    <div className={'CopyRight'}>
                        <Link to={'/Politic'}>политика конфиденциальности </Link><br/>
                        Copyright © 2021 Все права защищены
                    </div>
                </header>
            </div>

        </div>
    );
};

export default Main;