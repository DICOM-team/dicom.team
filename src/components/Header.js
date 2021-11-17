import React from 'react';
import {Link} from "react-router-dom";
import s from "./Pages/Main/Main.module.css";
import logo from "../img/logo.svg";

const Header = () => {
    return (
        <div>
            <div className={s.logo}>
                <Link to={'/'}><img src={logo} alt="DICOM компания"/></Link>
            </div>
        </div>
    );
};

export default Header;