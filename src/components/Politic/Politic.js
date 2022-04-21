import React from 'react';
import Title_h1 from "../Blocks/Title_H1/Title_h1";

const Politic = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <>
            <Title_h1 name={'Политика конфиденциальности'} subname={''} />
    );
};

export default Politic;