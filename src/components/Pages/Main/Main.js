import React from 'react';
import CardButton from "../../CardButton/CardButton";
import {Link} from "react-router-dom";
import {mainMenu} from "../../../State/State";
import s from './Main.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Main = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    const Cardbuttons = mainMenu.items.map( (item) => {
        return (
            <div className={s.card + " col-4 col-md-3 col-xl-2"}><Link to={item.urm}><CardButton name={item.name} img={item.img}/></Link></div>
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
                {Cardbuttons}
            </div>
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Main;