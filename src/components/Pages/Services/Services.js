import React from 'react';
import s from "../Main/Main.module.css";
import {Link} from "react-router-dom";
import logo from "../../../img/logo.svg";

const Services = () => {
    return (
        <div>
            <div className="App">
                <body className="App-header">
                <div className={s.logo}>
                    <Link to={'/'}><img src={logo} alt="DICOM компания"/></Link>
                </div>
                <div>
                    Сервисы
                </div>
                <div className={'CopyRight'}>
                    <Link to={'/Politic'}>политика конфиденциальности </Link><br/>
                    Copyright © 2021 Все права защищены
                </div>
                </body>
            </div>
        </div>
    );
};

export default Services;