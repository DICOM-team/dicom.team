import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import s from "./Pages/Main/Main.module.css";
import logo from "../img/logo.svg";

const Header = () => {

    // const [scrollY, setScrollY] = useState(0);

    function handleScroll() {
        // setScrollY(window.pageYOffset);
        if (window.pageYOffset>50) {
            // console.log("<jkmit 50")
            document.getElementById('head').classList.add('scroll_head')
        } else {
            // console.log("меньше")
            document.getElementById('head').classList.remove('scroll_head')
        }
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div id={'head'} className={'rowheader'}>
                <div className="col-md-3"></div>
                <div className={'col-9 col-xs-8 col-md-6'}>
                    <div className={s.logo}>
                        <Link to={'/'}><img id={'logo_head'} src={logo} alt="DICOM компания"/></Link>
                        <p className={s.sublogo}>DIGITIZE YOUR COMPANY</p>
                    </div>
                </div>
                <div className={'col-3 col-xs-2 col-md-3 flex-center'}>
                    <Link to={'/'}><img id={'home_icon'} src="/images/home.png" width={'30px'} alt={''} style={{ marginTop : '15px'}} /></Link>
                    <Link to={'/admin'}><img id={'enter_icon'} src="/images/enter.png" width={'23px'} alt={''} style={{ marginTop : '17px', marginLeft: '10px'}} /></Link>
                </div>
            </div>
            {/*<div className="fixed-center">Scroll position: {scrollY}px</div>*/}
        </>
    );
};

export default Header;