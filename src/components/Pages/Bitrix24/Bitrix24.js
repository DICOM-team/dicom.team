import React from 'react';
import s from './Bitrix24.module.css'
const Bitrix24 = () => {
    return (
        <div className={'App'}>
            <h1>Внедряем Битрикс24</h1>
            <div className={s.body}>
                <div className={s.img}>
                    <img width={'100%'} src="https://cdn-ru.bitrix24.ru/b18262870/landing/07f/07f2c20c6fafe94d95782a4fd8eac06e/2e6b40e17adfe8e6691a56d858ca75ff_2x.png" alt=""/>
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
            <p>
                За 10 лет более 20+ крупных проектов <br/>
                Я сам подготовлю ТЗ после серии встреч в Zoom/Skype или личные. <br/>
            </p>
            <div>
                <button className={'button'}>Заказать</button>
            </div>
        </div>
    );
};

export default Bitrix24;