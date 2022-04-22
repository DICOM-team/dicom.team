import React from 'react';
import Title_h1 from "../../Blocks/Title_H1/Title_h1";

const Services = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <div>
            <Title_h1 name={'Сервисы'} subname={'Сервисы разработанные студией DICOM'} />
            <img src="/img/crm.png" width={'100%'} alt="CRM ситема от компании DICOM"/>
        </div>
    );
};

export default Services;