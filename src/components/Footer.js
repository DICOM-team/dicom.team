import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={'CopyRight'}>
            <Link to={'/Politic'}>политика конфиденциальности </Link><br/>
            Copyright © 2021 Все права защищены
        </div>
    );
};

export default Footer;