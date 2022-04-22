import React from 'react';
import Title_h1 from "../../Blocks/Title_H1/Title_h1";

const TelegramBot = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <>
            <Title_h1 name={'Разработка приложений (ботов) для Telegram'} subname={'любой сложности'} />
            <img src="/img/bot-telegram.png" width={'100%'} alt="DICOM разработка ботов любой сложности"/>
        </>
    );
}

export default TelegramBot;