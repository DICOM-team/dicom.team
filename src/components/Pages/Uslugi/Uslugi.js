import React from 'react';
import s from "../Main/Main.module.css";
import {Link} from "react-router-dom";
import logo from "../../../img/logo.svg";

const Uslugi = () => {
    return (
        <div>
            <div className="App">
                <body className="App-header">
                <div className={s.logo}>
                    <Link to={'/'}><img src={logo} alt="DICOM компания"/></Link>
                </div>
                <div>
                    <h3>Разработаем мобильное приложение <br/>
                    с пожизненной гарантией</h3>
                    в 2 раза быстрее, от 200 000 руб. <br/>
                    За счет использования современных <br/>
                    кросс-платформенных решений Flutter
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

export default Uslugi;