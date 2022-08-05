import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import Accent from "../../Blocks/accent/Accent";
import Separator from "../../Blocks/Separator/Separator";
import SeparatorFree from "../../Blocks/Separator_free/Separator_free";
import Popup from "../../PopUp/Popup";
import WhiteBlock from "../../Blocks/WhiteBlock/WhiteBlock";
import MyForm from "../../Form/Form";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from "react-router-dom";
import {MenuSitesElements} from "../../../content/MenuSitesElements";
import s from "../Menu/Sites.module.css";
import CardButton from "../../CardButton/CardButton";

const Bitrix24Site = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    let Cardbuttons = MenuSitesElements.items.map( (item, index) => {
        return (
            <div key={index} className={s.card + " col-4 col-md-3 col-xl-2"}><Link to={item.urm}><CardButton name={item.name} img={item.img}/></Link></div>
        )
    })
    return (
        <div>

            <div className={s.CardsButtons + ' row'}>
                <div className={s.card + " col-4 col-md-3 col-xl-2"}><Link to={'/'}><CardButton name={''} img={'/images/icons/left.png'}/></Link></div>
                {Cardbuttons}
            </div>

            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>



                <Titleh1 name={'Простой конструктор сайтов'} subname={'Выбирайте из сотни готовых блоков или создавайте свои для идеального сайта'} />

                <a className={'link'} href="https://bavalex.bitrix24.site/">Пример нашей страницы на конструкторе от Битрикс24</a>

                <SeparatorFree />

                <img src={'/images/content/Sites/bitrix24/templates.png'} alt="Внедрение Битркис24 от DICOM" width={'75%'} />

                <Separator />

                <WhiteBlock content={<>
                    <Titleh2 name={'Легко и удобно'}
                             subname={'Выбирайте готовый шаблон, подходящий для вашего бизнеса. Легко меняйте тексты, фон, изображения, добавляйте готовые блоки из каталога.'}/>

                    <Accent context={<>Сайт, созданный в конструкторе, сразу адаптирован под все разрешения, мобильные телефоны, планшеты, iOS и Android.</>}/>
                    <Popup button={'Заказать бесплатную часовую консультацию'} title={'Бесплатная часовая консультация'} content={<><MyForm /></>}/>
                </>
                } />

                <SeparatorFree />


            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Bitrix24Site;