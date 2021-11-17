import React from 'react';
import CardButton from "../../CardButton/CardButton";
import {Link} from "react-router-dom";
import {mainMenu} from "../../../State/State";

const Main = () => {

    const Cardbuttons = mainMenu.items.map( (item) => {
        return (
            <Link to={item.urm}><CardButton name={item.name} img={item.img}/></Link>
        )
    })

    return (
        <div className="App">
            <div className={'CardsButtons'}>
                {Cardbuttons}
            </div>
        </div>
    );
};

export default Main;