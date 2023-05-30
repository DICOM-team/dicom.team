import React from 'react';
import CardButton from "../../CardButton/CardButton";
import {Link} from "react-router-dom";
import {mainMenu} from "../../../content/MainMenu";
import s from './Main.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Main = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    let Cardbuttons = mainMenu.items.map( (item, index) => {
        return (
            <div key={index} className={s.card + " col-6 col-md-4 col-xl-3"}><Link to={item.urm}><CardButton name={item.name} img={item.img}/></Link></div>
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
                <img style={{maxWidth: "500px"}} width={'75%'} src="/images/content/bot_comp.png" alt="Dicom team"/>
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Main;