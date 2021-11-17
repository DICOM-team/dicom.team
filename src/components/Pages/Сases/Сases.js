import React from 'react';
import s from './Cases.module.css'
import logo from '../../../img/logo.svg'

const Cases = () => {
    return (
        <div className="App">
            <h3>Кейсы</h3>
            <div className={s.cases}>
                <div>
                    <img src={logo}/>
                </div>
                <div>Павел пришел к нам с задачей "Требуется сделать сайт не как у всех и продвинуть его в Яндексе" <br/>
                    <br/>
                    Мы предложили Павлу сделать сайта с динамическим  бекграундом. <br/>
                    В списке задач стояла задача продвинуть сайт по 150 запросам в яндексе. <br/>
                    Задача была выполнена за 4 месяца работы. <br/>
                    <br/>
                    В данный момент работы над сайтом продолжаются. Сайт актвивно принимает заявки. <br/>
                </div>
            </div>
        </div>
    );
};

export default Cases;