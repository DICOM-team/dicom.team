import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TelegramBot = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    return (
        <>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
                <Titleh1 name={'Разработка приложений (ботов) для Telegram'} subname={'любой сложности'} />
                <img src="/images/bot-telegram.png" width={'100%'} alt="DICOM разработка ботов любой сложности"/>
            </ReactCSSTransitionGroup>
        </>
    );
}

export default TelegramBot;