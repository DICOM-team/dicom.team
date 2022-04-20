import React from 'react';
import './Uslugi.css';
import Title_h1 from "../../Blocks/Title_H1/Title_h1";
import ButtonForm from "../../Blocks/ButtonForm/ButtonForm";
import s from "../Bitrix24/Bitrix24.module.css";

const Uslugi = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <div>
            <Title_h1 name={'Разработаем мобильное приложение'} subname={'с пожизненной гарантией'} />
            <p>
                в 2 раза быстрее, от 200 000 руб. <br/>
                За счет использования современных <br/>
                кросс-платформенных решений Flutter
            </p>
            <ButtonForm name={'Заказать бесплатную часовую консультацию'} content={<>
                <h3>Бесплатная часовая консультация</h3>
                <br/><br/>
                <p className={s.description}>
                    <input type="text"/>Имя <br/>
                    <br/>
                    <input type="text"/>Телефон <br/>
                    <br/>
                </p>
                <button>Отправить</button>
            </>}
            />
        </div>
    );
};

export default Uslugi;