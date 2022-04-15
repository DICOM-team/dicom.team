// import React from 'react';
import React from 'react';
import s from './Bitrix24.module.css';
// import {Link} from "react-router-dom";
import ButtonForm from '../../Blocks/ButtonForm/ButtonForm';
import Title_h1 from "../../Blocks/Title_H1/Title_h1";
import Title_h2 from "../../Blocks/Title_H2/Title_h2";
import Accent from "../../Blocks/accent/Accent";
import Separator from "../../Blocks/Separator/Separator";
const Bitrix24 = () => {
    // запоминаем состояние окна открыто ил изакрыто

    return (
        <div className={'App'}>

            <Title_h1 name={'Внедряем Битрикс24'} subname={'Хорошее дело быстрым не бывает'} />
            <Accent context={<>За 10 лет более 20+ крупных проектов <br/>
                            Я сам подготовлю ТЗ после серии встреч в Zoom/Skype. <br/>
                            <b>Личные встречи только в Чебоксарах.</b></>}/>

            <ButtonForm name={'Заказать бесплатную часовую консультацию'} content={<>
                <h3>Бесплатная часовая консультация</h3>
                <br/><br/>
                <p className={s.description}>
                <input type="text"/>Имя <br/>
                <br/>
                <input type="text"/>Телефон <br/>
                <br/>
                </p>
                <button>Отправить</button>
                </>}
            />
            <Separator />
            <div className={s.block}>
                <div className={s.body}>
                    <div className={s.item}>
                        {/*<img width={'100%'} src={'/img/content/Bitirx24.png'} alt=""/>*/}
                        <img src={'/img/content/Bitirx24.png'} alt=""/>
                    </div>
                    <div className={s.item}>
                        <div className={s.description}>
                            <Title_h2 name={'Что такое Битрикс24'} subname={'основной функционал'} />
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
            <Separator />
            <Title_h2 name={'Через 2 недели уже начнете работать в Битрикс24'} subname={'Внедрение всего функционала Битрикс24 может составлять от 1 месяца до года.'} />
            <Separator />
            <Title_h2 name={'Как мы работаем'} subname={'этапы проекта'} />
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

        </div>
    );
};

export default Bitrix24;