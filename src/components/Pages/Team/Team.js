import React from "react";
import ThreeColums from "../../Blocks/ThreeColums/ThreeColums";
import Titleh1 from "../../Blocks/Title_H1/Titleh1";

const Team = (props) => {

    return (
        <>
            <Titleh1 name={'Наша команда'} subname={''} />
            <ThreeColums
                TextColum1={'Алексей'} Text1={
                    <>
                        <img src="/images/team/Alex.png" width={'50%'} alt=""/>
                        <br/><br/>
                        <p>
                            Системный архитектор
                        </p>
                    </>
                }
                TextColum2={'Вадим'} Text2={
                    <>
                        <img src="/images/team/Vadim.jpg" width={'50%'} alt=""/>
                        <br/><br/>
                        <p>
                            Team leader, Backend-developer, Frontend developer
                        </p>
                    </>
                }
                TextColum3={'Сергей'} Text3={
                    <>
                        <img src="/images/team/python.png" width={'50%'} alt=""/>
                        <br/><br/>
                        <p>
                            Python Backend-developer, telegram bot, QA-тестировщик'}
                        </p>
                    </>
                }
            />
            <ThreeColums
                TextColum1={'Аркадий'} Text1={
                    <>
                        <img src="/images/team/js.png" width={'50%'} alt=""/>
                        <br/><br/>
                        <p>
                            JS Backend-developer Express, JS Frontend developer React
                        </p>
                    </>
                }
                TextColum2={'Дарья'} Text2={'UI/UX дизайнер'}
                // TextColum3={'Сергей'} Text3={'Python, telegram bot, QA-тестировщик'}
            />
        </>
    )
}

export default Team