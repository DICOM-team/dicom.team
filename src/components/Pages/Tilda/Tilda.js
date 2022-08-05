import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Separator from "../../Blocks/Separator/Separator";
import SeparatorFree from "../../Blocks/Separator_free/Separator_free";
import ImgText from "../../Blocks/ImgText/imgText";
import ThreeColums from "../../Blocks/ThreeColums/ThreeColums";
import Popup from "../../PopUp/Popup";
import WhiteBlock from "../../Blocks/WhiteBlock/WhiteBlock";
import MyForm from "../../Form/Form";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Картинки
import img_1 from '../../../Images/content/Tilda/tilda_fon.jpg';

const Tilda = (props) => {
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

                <a className={'link'} href="/menuSites">Назад</a>

                <Titleh1 name={'Разработка сайтов на Tilda'} subname={'быстро от 3 дней'} />

                <SeparatorFree />

                <a className={'link'} href="https://dicom-team.tilda.ws">Пример страницы на tilda</a>

                <SeparatorFree />

                <WhiteBlock content={<>
                    <img src={img_1} alt="Сайт на Aspro" width={'75%'}/>
                </>
                } />

                <SeparatorFree />

                <ImgText url={'/images/content/Tilda/augustinvest_1_4x.png'} text={<> <p>
                    «Тильда» — это онлайн-конструктор сайтов. С его помощью можно быстро и просто создать свой сайт-визитку, протестировать и опубликовать в интернете. Чтобы сделать сайт на «Тильде», не нужно покупать доменное имя или учиться программировать — достаточно расставить по местам готовые блоки.
                </p></>} title={'Что такое Tilda'} subname={''} />

                <SeparatorFree />


                <WhiteBlock content={
                    <ThreeColums TextColum1={'free - бесплатно'}
                                 Text1={'1 сайт. Коллекцией ключевых блоков. Разработка от 5 000 руб.'}
                                 TextColum2={'Personal - 500 руб/мес'}
                                 Text2={'1 сайт. Полная коллекция блоков, подключение своего домена и многое другое. Разработка от 10 000 руб.'}
                                 TextColum3={'Business - 1000 руб/мес'}
                                 Text3={'До 5 сайтов. Полная коллекция блоков. Разработка от 15 000 руб.'}
                    />
                }/>

                <Separator />

                <div>
                    <a className={'link'} href="https://tilda.cc/?r=6669047">Подробнее с Tilda можно ознакомиться на официальном сайте</a>
                </div>

                <SeparatorFree />


                <Popup button={'Заказать бесплатную часовую консультацию'} title={'Бесплатная часовая консультация'} content={<><MyForm /></>}/>

            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Tilda;