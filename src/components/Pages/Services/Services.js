import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Services = (props) => {
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
            <Titleh1 name={'Сервисы'} subname={'Сервисы разработанные студией DICOM'} />
            <img src="/images/crm.png" width={'100%'} alt="CRM ситема от компании DICOM"/>
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Services;