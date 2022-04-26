import React from 'react';
import Title_h1 from "../../Blocks/Title_H1/Title_h1";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Services = (props) => {
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
            <Title_h1 name={'Сервисы'} subname={'Сервисы разработанные студией DICOM'} />
            <img src="/img/crm.png" width={'100%'} alt="CRM ситема от компании DICOM"/>
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Services;