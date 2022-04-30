import React from 'react';
import {Link} from "react-router-dom";
import s from "./Pages/Main/Main.module.css";
import logo from "../img/logo.svg";

const Header = () => {
    return (
        <>
            <div className={'rowheader'}>
                <div className="col-md-3"></div>
                <div className={'col-9 col-xs-8 col-md-6'}>
                    <div className={s.logo}>
                        <Link to={'/'}><img src={logo} alt="DICOM компания"/></Link>
                        <p className={s.sublogo}>DIGITIZE YOUR COMPANY</p>
                    </div>
                </div>
                <div className={'col-3 col-xs-2 col-md-3 flex-center'}>
                    <Link to={'/'}><img src="/images/home.png" width={'30px'} alt={''}/></Link>
                </div>
            </div>
            {/*<Separator />*/}
        </>
    );
};

export default Header;