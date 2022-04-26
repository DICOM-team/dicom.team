import React from 'react';
import Title_h1 from "../../Blocks/Title_H1/Title_h1";
import Carousel from "react-bootstrap/Carousel"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Cases = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
            <hr/>
            <Title_h1 name={'Кейсы'} subname={''} />
            <Carousel className={'carousel-dark'}>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src="/img/content/cases/brandcamp_case.png"
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3>Компания Brandcamp</h3>
                        <p>
                            Полная оцифровка бизнеса. технологии и сервисы (Битрикс24, 1С-Битркис управление сайтом, 1С:Предприятие "Управление торговлей") <br/>
                            Синхронизация работы всех систем.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100 block"
                        src="/img/content/cases/Romana.png"
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Компания ROMANA</h3>
                        <p>Разработка, внедрение и автоматизация бизнес-процессов компании в Битрикс24</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Cases;