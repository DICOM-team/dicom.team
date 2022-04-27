import React from 'react';
import Titleh1 from "../Blocks/Title_H1/Titleh1";

const Politic = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <>
            <Titleh1 name={'Политика конфиденциальности'} subname={''} />
        </>
    );
};

export default Politic;