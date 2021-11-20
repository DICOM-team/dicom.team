import React from 'react';
import s from './Bitrix24.module.css'
import {Link} from "react-router-dom";
const Bitrix24 = () => {
    return (
        <div className={'App'}>
            <h1>Внедряем Битрикс24</h1>
            <p className={'accent'}>
                За 10 лет более 20+ крупных проектов <br/>
                Я сам подготовлю ТЗ после серии встреч в Zoom/Skype. Личные встречи только в Чебоксарах. <br/>
            </p>
            <div className={s.body}>
                <div className={s.img}>
                    <img width={'100%'} src={'/img/content/Bitirx24.png'} alt=""/>
                </div>
                <div className={s.description}>
                    <h3>ЧТО ТАКОЕ БИТРИКС24</h3>
                    <p>
                        - Быстрый поиск контактов сотрудников. <br/>
                        - Управление документами.<br/>
                        - Управление задачами и проектами.<br/>
                        - Тайм-менеджмент 2.0.<br/>
                        - Собрания и планерки. <br/>
                        - CRM (Customer Relationship Management).<br/>
                        - Интеграция с 1С, Microsoft, Google, Apple.<br/>
                        - Автоматизация бизнес-процессов.<br/>
                        - Производительность и безопасность.<br/>
                        - Мобильные веб-приложения.<br/>
                    </p>
                </div>
            </div>
            <br/>
            <p className={'text-center'}>
                <h3>ЧЕРЕЗ 2 НЕДЕЛИ УЖЕ НАЧНЕТЕ РАБОТАТЬ В БИТРИКС 24</h3>
                Внедрение всего функционала Битрикс24 может составлять от 1 месяца до года.
            </p>
            <br/><br/>
            <a className={'link'} href="https://www.bitrix24.ru/?p=14113838">Подробнее с Битрикс24 можно ознакомиться на официальном сайте</a>
            <br/><br/><br/>
            <div>
                <button className={'button'}>Заказать бесплатную часовую консультацию</button><Link to={'/consult'}><span className={'link'}>подробнее</span></Link>
            </div>
        </div>
    );
};

export default Bitrix24;