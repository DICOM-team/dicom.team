import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import './Uslugi.css';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import s from "../Bitrix24/Bitrix24.module.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MyForm from "../../Form/Form";
import Popup from "../../PopUp/Popup";
import ImgText from "../../Blocks/ImgText/imgText";

const Uslugi = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
                <Titleh1 name={'Услуги'} subname={'консультации по телефону и telegram'} />
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Titleh2 name={'Разработаем мобильное приложение'} subname={'Android, ios, React native'} /></Accordion.Header>
                        <Accordion.Body>
                            <ImgText url={'/images/androidios.png'} title={'Консультация бесплатно'} subname={''} text={
                                <div className={'text-start'}>
                                    Разработка типового приложения на 10 экранов для iOS и Android в среднем стоит 1 000 000 рублей и занимает 1,5 месяца. <br/>
                                    Мы разрабатываем за 1 месяц и 700 000 рублей. Экономия составит до 30% бюджета и времени.
                                </div>} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><Titleh2 name={'Разработаем телеграм бота любой сложности'} subname={'интеграция бота с любыми API'} /></Accordion.Header>
                        <Accordion.Body>
                            <ImgText url={'/images/bot-telegram.png'} title={'Консультация бесплатно'} subname={''} text={
                                <div className={'text-start'}>
                                    Раазработка бота любой сложности в кратчайший срок <br/>
                                    Стоимость от 5000 руб.
                                </div>} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><Titleh2 name={'Внедрим Битрикс24, мы официальный золотой партнер'} subname={'Внедрение, настройка, интеграции, бизнес-процессы, автоматизация'} /></Accordion.Header>
                        <Accordion.Body>
                            <ImgText url={'/images/sert/b24.png'} title={'Список работ'} subname={''} text={
                                <div className={'text-start'}>
                                    <ul>
                                        <li>Автоматизация компнии с помощью бизнес-процессов Битрикс24</li>
                                        <li>Оптимизация бизнес-процессов</li>
                                        <li>Обучение как сотрудников так и руководителей.</li>
                                        <li>Полное внедрение Битрикс24 под ключ. Сроки от полу года.</li>
                                        <li>Стоимость расчитывается после подготовки ТЗ и аудита бизнес-процессов компании.</li>
                                    </ul>
                                </div>} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><Titleh2 name={'Разработаем web приложение - SPA'} subname={'SPA — Single Page Application'} /></Accordion.Header>
                        <Accordion.Body>
                            <ImgText url={'/images/sert/b24.png'} title={'Список работ'} subname={''} text={
                                <div className={'text-start'}>
                                    <ul>
                                        <li>Автоматизация компнии с помощью бизнес-процессов Битрикс24</li>
                                        <li>Оптимизация бизнес-процессов</li>
                                        <li>Обучение как сотрудников так и руководителей.</li>
                                        <li>Полное внедрение Битрикс24 под ключ. Сроки от полу года.</li>
                                        <li>Стоимость расчитывается после подготовки ТЗ и аудита бизнес-процессов компании.</li>
                                    </ul>
                                </div>} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Popup button={'Заказать услугу'} title={'Заказать услугу'} content={<>
                    <p className={s.description}>
                        <MyForm />
                    </p>
                </>}/>
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Uslugi;