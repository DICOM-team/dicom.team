import React from 'react';
import Title_h1 from "../../Blocks/Title_H1/Title_h1";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TelegramBot = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
            <hr/>
            <Title_h1 name={'Разработка приложений (ботов) для Telegram'} subname={'любой сложности'} />
            <img src="/img/bot-telegram.png" width={'100%'} alt="DICOM разработка ботов любой сложности"/>
            </ReactCSSTransitionGroup>
        </>
    );
}

export default TelegramBot;