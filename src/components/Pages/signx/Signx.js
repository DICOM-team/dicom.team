import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import Accent from "../../Blocks/accent/Accent";
import Separator from "../../Blocks/Separator/Separator";
import SeparatorFree from "../../Blocks/Separator_free/Separator_free";
import ImgText from "../../Blocks/ImgText/imgText";
import TextImg from "../../Blocks/TextImg/TextImg"
import ThreeColums from "../../Blocks/ThreeColums/ThreeColums";
import Popup from "../../PopUp/Popup";
import WhiteBlock from "../../Blocks/WhiteBlock/WhiteBlock";
import MyForm from "../../Form/Form";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Signx = (props) => {
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

                <Titleh1 name={'Электронная подпись \n' +
                'для Юридических и Физических лиц \n' +
                'без USB токенов.'} subname={'Работает на основе Усиленной Неквалифицированной и Простой Электронной подписи.'} />



                <Separator />


                <ImgText url={'/images/content/signx/91374.png'} text={<> <p>
                    - Без персональных данных и регистраций. <br/>
                    - Юридически значимая подпись.<br/>
                    - Достаточно иметь только E-mail.<br/>
                    - Без флешек и токенов.<br/>
                </p></>} title={'Удобнее чем обычная ЭЦП'} subname={''} />

                <SeparatorFree />

                <WhiteBlock content={
                    <TextImg url={'/images/content/kp_1x.png'} text={<> <p>
                        Битрикс24 и amoCRM
                    </p></>} Title={'Готовая интеграция с CRM'}/>
                } />

                <SeparatorFree />

                <Titleh2 name={'Подписывайте быстро за 3 шага'} subname={''} />

                <Separator />

                <WhiteBlock content={
                    <ThreeColums TextColum1={'1 Подтвердите свой e-mail'}
                                 Text1={'Зайдите на портал и подтвердите ваш e-mail'}
                                 TextColum2={'2 Загрузите документ в систему'}
                                 Text2={'Загрузите документы необходимые для подписи.'}
                                 TextColum3={'3 Поставьте подпись'}
                                 Text3={'Поставьте подпись и отправьте контрагенту.'}
                    />
                }/>

                <Separator />

                <img src={'/images/content/signx/91374.png'} alt="Внедрение Битркис24 от DICOM" width={'75%'} />

                <SeparatorFree />

                <Titleh2 name={'Тарифы'} subname={''} />


                <Separator />

                <WhiteBlock content={
                    <ThreeColums TextColum1={'Базовый'}
                                 Text1={
                                     <p>Для малого бизнеса<br/>
                                     <br/>
                                     <h2>1 750 ₽/мес.</h2><br/>
                                     при оплате за год -20%<br/><br/>
                                     70 рублей за одну подпись<br/><br/>
                                     25 подписей в месяц<br/>
                                     Любые входящие - бесплатно</p>
                                 }
                                 TextColum2={'Эксперт'}
                                 Text2={
                                     <p>Для среднего бизнеса<br/>
                                     <br/>
                                     <h2>3 750 ₽/мес.</h2><br/>
                                     при оплате за год -20%<br/><br/>
                                     50 рублей за одну подпись<br/><br/>
                                     75 подписей в месяц<br/>
                                     Любые входящие - бесплатно</p>
                                 }
                                 TextColum3={'Компания'}
                                 Text3={
                                     <p>Для крупного бизнеса<br/>
                                     <br/>
                                     <h2>8 000 ₽/мес.</h2><br/>
                                     при оплате за год -20%<br/><br/>
                                     40 рублей за одну подпись<br/><br/>
                                     200 подписей в месяц<br/>
                                     Любые входящие - бесплатно</p>
                                 }
                    />
                }/>
                <SeparatorFree />
                <div>
                    <a className={'link'} href="https://www.signx.cloud/">Подробнее можно ознакомиться на официальном сайте signx.cloud</a>
                </div>
                <SeparatorFree />
                <Popup button={'Заказать бесплатную часовую консультацию'} title={'Бесплатная часовая консультация'} content={<><MyForm /></>}/>

            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Signx;