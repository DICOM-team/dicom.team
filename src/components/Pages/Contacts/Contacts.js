import React from 'react';
import Title_h1 from "../../Blocks/Title_H1/Title_h1";
import Title_h2 from "../../Blocks/Title_H2/Title_h2";
import Accent from "../../Blocks/accent/Accent";
import Separator from "../../Blocks/Separator/Separator";

const Contacts = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="/img/contactspng.png" width={'100%'} alt=""/>
                    </div>
                    <div className="col-12 col-md-6">
                        <Title_h1 name={'Наши контакты'} subname={'самый удобный способ Telegram'}/>
                        <b className={'Lage_text'}>
                            Наш телефон: +7 960 311 21 05 <br/>
                            WhatsApp и Telegram <br/>
                            e-mail: bavalex24@yandex.ru
                        </b>
                    </div>
                </div>
            </div>

            <Separator />
            <Title_h2 name={'Наш офис'} subname={'Чебоксары, пр. Ленина 12Б'} />
            <Accent context={'Коворкинг центр имеет пропускную систему, поэтому предварительно позвоните мне или любым другим способом сообщите о предстоящей встрече.'}/>
        </>
    );
};

export default Contacts;