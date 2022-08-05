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

const Bitrix24Site = (props) => {
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

                <a className={'link'} href="/Sites">Назад</a>

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