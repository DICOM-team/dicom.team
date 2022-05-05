import React from "react";
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import WhiteBlock from "../../Blocks/WhiteBlock/WhiteBlock";
import ImgText from "../../Blocks/ImgText/imgText";
import Separator from "../../Blocks/Separator/Separator";
import SeparatorFree from "../../Blocks/Separator_free/Separator_free";
import Titleh3 from "../../Blocks/Title_H3/Titleh3";

const Vacancy = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    return (
            <>
                <ReactCSSTransitionGroup
                    transitionName="anim"
                    transitionAppear={true}
                    transitionAppearTimeout={5000}
                    transitionEnter={false}
                    transitionLeave={false}>
                <Titleh1 name={'DICOM - расширяет команду и ищет React разработчика.'} subname={'Предполагается длительное удалённое сотрудничество!'}/>
                    <SeparatorFree />
                    <WhiteBlock content={
                        <>
                            <ImgText url={'/logo512.png'} title={'Наш основной продукт'} subname={'собственная CRM система'} text={
                            <div className={'text-start'}>
                                Универсальная модульная облачная платформа управления процессами компании&nbsp; на основе web технологий. <br/>
                            Система является комплексным решением для автоматизации и контроля различных бизнес процессов компании. Продукт включает в себя модули: &laquo;CRM&raquo;, &laquo;Задачник&raquo;, &laquo;Склад&raquo;
                            </div>} />
                        </>
                    }>
                </WhiteBlock>
                    <Separator />
                <Titleh2 name={'Будем рады видеть вас в нашей команде!'} subname={''}/>

                    <Titleh3 name={'Что требуем:'} subname={''} />
                    <div className={'text-start'}>
                        <p>&mdash; опыт разработки SPA-приложений с применением React от двух лет;</p>
                        {/*<p>&mdash; Уверенное знание TypeScript</p>*/}
                        <p>&mdash; Уверенное владение React hooks</p>
                        <p>&mdash; хорошее понимание того как React работает "под капотом";</p>
                        {/*<p>&mdash; английский на уровне чтения технической литературы;</p>*/}
                        <p>&mdash; знание классических алгоритмов и структур данных;</p>
                        <p>&mdash; опыт работы с системой контроля версий Git;</p>
                        {/*<p>&mdash; понимание базовых принципов TDD.</p>*/}
                    </div>
                    <Titleh3 name={'Будет большим плюсом:'} subname={''} />
                    {/*<p>&mdash; понимание и принятие agile методик разработки;</p>*/}
                    <div className={'text-start'}>
                        <p>&mdash; хорошее понимание git, умение применять git flow;</p>
                        <p>&mdash; навык разработки мобильных приложений с применением ReactNative;</p>
                        <p>&mdash; понимание принципов и преимуществ функционального программирования;</p>
                        <p>&mdash; коммуникабельность, позитивность, желание работать, развиваться, осваивать новые приёмы.</p>
                    </div>
                <Titleh3 name={'Что даём:'} subname={''} />
                    <div className={'text-start'}>
                        <p>&mdash; работа в команде отличных спецов: 2 x backend, 2х frontend, QA-тестировщик, UI/UX дизайнер, системный архитектор</p>
                        <p>&mdash; не очень большой, но очень дружный, молодой коллектив</p>
                        <p>&mdash; возможность работать из дома или co-working (если очень хочется, то можно и в офисе в Чебоксарах);</p>
                        <p>&mdash; гибкий график работы;</p>
                        <p>&mdash; стартап на стероидах (все плюшки большой и стабильной компании за вычетом бюрократии и "проектов в стол");</p>
                    </div>
                {/*<p>&mdash; оформление по ТК РФ;</p>*/}
                {/*<p>&mdash; своевременная полностью белая&nbsp;зарплата.</p>*/}
                </ReactCSSTransitionGroup>
            </>
        )
}

export default Vacancy