import React from 'react';
import CardButton from "../../CardButton/CardButton";
import {Link} from "react-router-dom";
import {MenuSitesElements} from "../../../content/MenuSitesElements";
import s from './Sites.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

            </ReactCSSTransitionGroup>
        </div>
    );
};

export default MenuSites;