import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import Accent from "../../Blocks/accent/Accent";
import Separator from "../../Blocks/Separator/Separator";
import Separator_free from "../../Blocks/Separator_free/Separator_free";
import ImgText from "../../Blocks/ImgText/imgText";
import TextImg from "../../Blocks/TextImg/TextImg"
import ThreeColums from "../../Blocks/ThreeColums/ThreeColums";
import Popup from "../../PopUp/Popup";
import WhiteBlock from "../../Blocks/WhiteBlock/WhiteBlock";
import MyForm from "../../Form/Form";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Bitrix24 = (props) => {
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

                <Titleh1 name={'Внедряем Битрикс24'} subname={'Хорошее дело быстрым не бывает'} />

                <img src={'/images/content/Bitrix24-logo-480x360.png'} alt="Внедрение Битркис24 от DICOM" width={'50%'} />

                <Separator />

                <WhiteBlock content={<>
                    <Titleh2 name={'Через 2 недели уже начнете работать в Битрикс24'}
                             subname={'Внедрение всего функционала Битрикс24 может составлять от 1 месяца до года.'}/>

                    <Accent context={<>За 10 лет более 20+ крупных проектов <br/>
                    Я сам подготовлю ТЗ после серии встреч в Zoom/Skype. <br/>
                    <b>Личные встречи только в Чебоксарах.</b></>}/>
                    <Popup button={'Заказать бесплатную часовую консультацию'} title={'Бесплатная часовая консультация'} content={<><MyForm /></>}/>
                </>
                } />

                <Separator_free />

                <ImgText url={'/images/content/Bitirx24.png'} text={<> <p>
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
                </p></>} title={'Что такое Битрикс24'} subname={''} />

                <Separator_free />

                <WhiteBlock content={
                    <TextImg url={'/images/content/kp_1x.png'} text={<> <p>
                        Оформленная подписка Битрикс24.Маркет Плюс позволит использовать более 1 500 полезных приложений,
                        представленных в каталоге.
                    </p></>} Title={'Битрикс24.Маркет Плюс'}/>
                } />

                <Separator_free />

                <Titleh2 name={'Как мы работаем'} subname={'этапы проекта'} />

                <Separator />

                <WhiteBlock content={
                    <ThreeColums TextColum1={'Аудит'}
                                 Text1={'Любой проект начинается с аудита, так как для того чтобы понимать что нужно делать, надо собрать максимально подробную информацию о бизнес-процессах компании.'}
                                 TextColum2={'Обучение'}
                                 Text2={'Очень важный этап, без обучения успешность внедрения Битрикс24 практически всегда заканчивается саботажем со стороны сотрудников вызванный непониманием логики работы в новой системе.'}
                                 TextColum3={'Внедрение'}
                                 Text3={'Основной этап работы, на котором мы выполняем все работы по техническому заданию, который сформирован на этапе аудита.'}
                    />
                }/>

                <Separator />

                <div>
                    <a className={'link'} href="https://www.bitrix24.ru/?p=14113838">Подробнее с Битрикс24 можно ознакомиться на официальном сайте</a>
                </div>

                <Popup button={'Заказать бесплатную часовую консультацию'} title={'Бесплатная часовая консультация'} content={<><MyForm /></>}/>

            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Bitrix24;