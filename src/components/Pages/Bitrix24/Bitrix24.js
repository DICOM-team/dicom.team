// import React from 'react';
import React, { useState } from 'react';
import s from './Bitrix24.module.css';
import {Link} from "react-router-dom";
import Popup from '../../PopUp/Popup';
const Bitrix24 = () => {
    // запоминаем состояние окна открыто ил изакрыто
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={'App'}>
            <div className={s.block}>
                <h1>Внедряем Битрикс24
                    <p>
                        Хорошее дело быстрым не бывает
                    </p>
                </h1>
            </div>
            <div className={s.block}>
                <p className={'accent'}>
                    За 10 лет более 20+ крупных проектов <br/>
                    Я сам подготовлю ТЗ после серии встреч в Zoom/Skype. <br/>
                    <b>Личные встречи только в Чебоксарах.</b> <br/>
                </p>
            </div>
            <div className={s.block}>
                <div className={s.body}>
                    <div className={s.item}>
                        {/*<img width={'100%'} src={'/img/content/Bitirx24.png'} alt=""/>*/}
                        <img src={'/img/content/Bitirx24.png'} alt=""/>
                    </div>
                    <div className={s.item}>
                        <div className={s.description}>
                            <h3>Что такое Битрикс24</h3>
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
                </div>
            </div>
            <div className={s.block}>
                <p className={'text-center'}>
                    <h3>Через 2 недели уже начнете работать в Битрикс24</h3>
                    Внедрение всего функционала Битрикс24 может составлять от 1 месяца до года.
                </p>
            </div>
            <div className={s.block}>
                <h2>
                    Как мы работаем
                </h2>
            </div>
            <div className={s.block}>
                <div className={s.item100}>
                    Аудит
                    <p>
                        Любой проект начинается с аудита, так как для того чтобы понимать что нужно делать, надо собрать максимально подробную информацию о бизнес-процессах компании.
                    </p>
                </div>
                <div className={s.item100}>
                    Обучение
                    <p>
                        Очень важный этап, без обучения успешность внедрения Битрикс24 практически всегда заканчивается саботажем со стороны сотрудников вызванный непониманием логики работы в новой системе.
                    </p>
                </div>
                <div className={s.item100}>
                    Внедрение
                    <p>
                        Основной этап работы, на котором мы выполняем все работы по техническому заданию, который сформирован на этапе аудита.
                    </p>
                </div>
            </div>
            <div className={s.block}>
                <a className={'link'} href="https://www.bitrix24.ru/?p=14113838">Подробнее с Битрикс24 можно ознакомиться на официальном сайте</a>
            </div>
            <div className={s.block}>
                {/*Вызов модального окна*/}
                <input
                    className={'button'}
                    type="button"
                    value="Заказать бесплатную часовую консультацию"
                    onClick={togglePopup}
                />
            </div>

            {/*Контекст popup*/}
            {isOpen && <Popup
                content={<>
                    <h3>Форма обратной связи</h3>
                    <br/><br/>
                    <p className={s.description}>
                        <input type="text"/>Имя <br/>
                        <br/>
                        <input type="text"/>Телефон <br/>
                        <br/>
                    </p>
                    <button>Отправить</button>
                </>}
                handleClose={togglePopup}
            />}

        </div>
    );
};

export default Bitrix24;