import React from "react";
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import {TeamList} from '../../../content/Team';
import Titleh3 from "../../Blocks/Title_H3/Titleh3";

const Team = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    // Подготовим массив для команды
    let Team_res = TeamList.items.map( (item, index) => {
        return (
            <div key={index} className="col-12 col-md-6 col-lg-4 p-3">
                <div className="flex-center p-3">
                    <Titleh3 name={item.name} subname={''} />
                </div>
                    <img src={item.photo} width="50%" alt=""/>
                <p>
                    <br/>
                    {item.skills}
                </p>
            </div>
        )
    })
    return (
        <>
            <Titleh1 name={'Наша команда'} subname={''} />
            <div className={'row'}>{Team_res}</div>
        </>
    )
}

export default Team