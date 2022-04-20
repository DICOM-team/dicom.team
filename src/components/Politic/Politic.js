import React from 'react';
import s from "../Pages/Main/Main.module.css";
import {Link} from "react-router-dom";
import logo from "../../img/logo.svg";

const Politic = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <div>
            <div className="App">
                <body className="App-header">
                <div className={s.logo}>
                    <Link to={'/'}><img src={logo} alt="DICOM компания"/></Link>
                </div>
                <div>
                    <h1>Политика конфиденциальности</h1>
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

export default Politic;