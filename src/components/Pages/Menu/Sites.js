import React from 'react';
import CardButton from "../../CardButton/CardButton";
import {Link} from "react-router-dom";
import {MenuSitesElements} from "../../../content/MenuSitesElements";
import s from './Sites.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Accent from "../../Blocks/accent/Accent";
import Separator_free from "../../Blocks/Separator_free/Separator_free";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";

const MenuSites = (props) => {

    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    let Cardbuttons = MenuSitesElements.items.map( (item, index) => {
        return (
            <div key={index} className={s.card + " col-4 col-md-3 col-xl-2"}><Link to={item.urm}><CardButton name={item.name} img={item.img}/></Link></div>
        )
    })

    return (
        <div className={s.mobileMainBody}>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>

                <div className={s.CardsButtons + ' row'}>
                    <div className={s.card + " col-4 col-md-3 col-xl-2"}><Link to={'/'}><CardButton name={''} img={'/images/icons/left.png'}/></Link></div>
                    {Cardbuttons}
                </div>

                <Accent context={
                    <>
                        <h3>ВСЕ САЙТЫ БЕЗ ИСКЛЮЧЕНИЯ</h3>
                        Включают в себя
                        <ul style={{textAlign: 'left'}}>
                            <li>Доскональное изучение вашей ниши</li>
                            <li>Анализ конкурентов</li>
                            <li>Прототипирование, дизайн макет для трех разрешений</li>
                            <li>Ручная продуманная верстка, 100% адаптивный макет</li>
                            <li>Возможность применение верстки по методологии БЭМ</li>
                            <li>100% валидный код, оптимизация изображений</li>
                            <li>Посадка на CMS MODX, Laravel, Wordpress, Joomla, Opencart, программирование</li>
                            <li>Подключение платежных систем, доставок, необходимых модулей</li>
                            <li>Тестирование</li>
                        </ul>

                    </>
                }/>
                <Separator_free/>
                <Titleh2 name={'Пример сайта на БУС 1C-Битрикс'} subname={'от компании DICOM'} />
                <Separator_free/>
                <img src="/images/content/Sites/brandcamp.png" alt="Сайты от студии DICOM" width={'75%'}/>
                <Separator_free/>
                <Titleh2 name={'Другие системы управления контентом сайта'} subname={'работаем с любыми CMS'} />
                <Separator_free/>
                <div style={{justifyContent: 'center'}}className={s.CardsButtons + ' row'}>
                    {Cardbuttons}
                </div>

            </ReactCSSTransitionGroup>
        </div>
    );
};

export default MenuSites;