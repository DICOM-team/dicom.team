import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import Titleh3 from "../../Blocks/Title_H3/Titleh3";
import Carousel from "react-bootstrap/Carousel"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Cases = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    // Собрать карусель из state

    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
            {/*<hr/>*/}
            <Titleh1 name={'Кейсы'} subname={''} />
            <Carousel className={'carousel-dark'}>
                <Carousel.Item interval={10000}>
                    <Carousel.Caption>
                        <Titleh2 name={'Компания Brandcamp'} subname={'Поизводство и продажа'} />
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src="/images/content/cases/brandcamp_case.png"
                        alt="brandcamp"
                    />
                    <Titleh3 name={'Описание работ выполенных в компании brandcamp'} subname={''} />
                    <p>
                        Полная оцифровка бизнеса. технологии и сервисы (Битрикс24, 1С-Битркис управление сайтом, 1С:Предприятие "Управление торговлей") <br/>
                        Синхронизация работы всех систем.
                    </p>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <Carousel.Caption>
                        <Titleh2 name={'ROMANA'} subname={'Завод игрового и спортивного оборудования'} />
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src="/images/content/cases/Romana.png"
                        alt="Romana"
                    />
                    <Titleh3 name={'Описание работ выполенных в компании ROMANA'} subname={''} />
                    <p>Разработка, внедрение и автоматизация бизнес-процессов компании в Битрикс24</p>
                </Carousel.Item>
            </Carousel>
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Cases;