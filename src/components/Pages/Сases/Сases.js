import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Carousel from "react-bootstrap/Carousel"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Titleh3 from "../../Blocks/Title_H3/Titleh3";

const Cases = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
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
                    <img
                        className="d-block w-100"
                        src="/images/content/cases/brandcamp_case.png"
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <Titleh3 name={'Компания Brandcamp'} subname={'Поизводство и продажа'} />
                        <p>
                            Полная оцифровка бизнеса. технологии и сервисы (Битрикс24, 1С-Битркис управление сайтом, 1С:Предприятие "Управление торговлей") <br/>
                            Синхронизация работы всех систем.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100 block"
                        src="/images/content/cases/Romana.png"
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <Titleh3 name={'ROMANA'} subname={'Завод игрового и спортивного оборудования'} />
                        <p>Разработка, внедрение и автоматизация бизнес-процессов компании в Битрикс24</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Cases;