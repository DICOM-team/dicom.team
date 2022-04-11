import React from 'react';
import {Link} from "react-router-dom";
import s from "./Pages/Main/Main.module.css";
import logo from "../img/logo.svg";

const Header = () => {
    return (
        <div>
            <div className={s.logo}>
                <Link to={'/'}><img src={logo} alt="DICOM компания"/></Link>
                <p>
                    Нажмите на логотип, чтобы вернуться на домашнюю станицу
                </p>
            </div>
        </div>
    );
};

export default Header;