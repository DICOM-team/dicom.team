import React from "react";
import ThreeColums from "../../Blocks/ThreeColums/ThreeColums";
import ym from 'react-yandex-metrika';
ym('hit', '/team');
// ym('reachGoal', 'team');

const Team = (props) => {
    return (
        <>
            <ThreeColums
                TextColum1={'Алексей'} Text1={'Системный архитектор'}
                TextColum2={'Вадим'} Text2={'Team leader, Backend-developer, Frontend developer'}
                TextColum3={'Сергей'} Text3={'Python Backend-developer, telegram bot, QA-тестировщик'}
            />
            <ThreeColums
                TextColum1={'Аркадий'} Text1={'JS Backend-developer Express, JS Frontend developer React'}
                TextColum2={'Дарья'} Text2={'UI/UX дизайнер'}
                // TextColum3={'Сергей'} Text3={'Python, telegram bot, QA-тестировщик'}
            />
        </>
    )
}

export default Team