import React from 'react';
import {Outlet} from "react-router-dom";


const ContactsInside = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    return (
        <>
            <Outlet />
        </>
    );
};

export default ContactsInside;