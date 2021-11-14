import React from 'react';
import logo from "../../img/logo.svg";
import CardButton from "../CardButton/CardButton";
import {Link} from "react-router-dom";
import s from './Main.module.css'

const Main = () => {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <div className={s.logo}>
                        <img src={logo} alt="DICOM компания"/>
                    </div>
                    <div className={'CardsButtons'}>
                        <CardButton number={'1'} name={'Услуги'} img={'/img/defaultCards.png'}/>
                        <CardButton number={'2'} name={'Сервисы'} img={'/img/defaultCards.png'}/>
                        <CardButton number={'3'} name={'Кейсы'} img={'/img/defaultCards.png'}/>
                        <CardButton number={'4'} name={'Команда'} img={'/img/defaultCards.png'}/>
                        <CardButton number={'5'} name={'Вакансии'} img={'/img/defaultCards.png'}/>
                        <Link to={'/contacts'}><CardButton number={'6'} name={'Контакты'} img={'/img/contacts.png'} /></Link>
                        <CardButton number={'7'} name={'Продвижение'} img={'/img/defaultCards.png'}/>
                        <CardButton number={'8'} name={'Битрикс24'} img={'/img/bitrix24.png'}/>
                        <CardButton number={'9'} name={'1С'} img={'/img/defaultCards.png'}/>

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