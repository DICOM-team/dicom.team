import React from 'react';
import s from "../Main/Main.module.css";
import logo from "../../../img/logo.svg";
import {Link} from "react-router-dom";

const Contacts = () => {
    return (
        <div>
            <div className="App">
                <body className="App-header">
                    <div className={s.logo}>
                        <Link to={'/'}><img src={logo} alt="DICOM компания"/></Link>
                    </div>
                    <div>
                        Наш телефон: +7 960 311 21 05
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

export default Contacts;