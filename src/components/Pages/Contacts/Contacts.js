import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import Accent from "../../Blocks/accent/Accent";
import Separator from "../../Blocks/Separator/Separator";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import Tabs  from "react-bootstrap/Tabs"
import {Tabs, Tab} from 'react-bootstrap';
const Contacts = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        <>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
            {/*<hr/>*/}
            <Tabs defaultActiveKey="Контакты" id="uncontrolled-tab" className="mb-3">
                <Tab eventKey="Контакты" title="Контакты">
                    <Titleh1 name={'Наши контакты'} subname={'самый удобный способ Telegram'}/>
                    {/*<Separator />*/}
                    <div className="container">
                        <div className="row flex-center">
                            <div className="col-12 col-md-6">
                                <img src="/images/contactspng.png" width={'100%'} alt=""/>
                            </div>
                            <div className="col-12 col-md-6">
                                <b className={'Lage_text'}>
                                    Наш телефон: +7 960 311 21 05 <br/>
                                    WhatsApp и <a href={'https://t.me/dicom_team'}>Telegram</a> <br/>
                                    e-mail: bavalex24@yandex.ru
                                </b>
                            </div>
                        </div>
                    </div>

                </Tab>
                <Tab eventKey="Офис" title="Офис">
                    <Titleh2 name={'Наш офис'} subname={'Чебоксары, пр. Ленина 12Б'} />
                    <Accent context={'Коворкинг центр имеет пропускную систему, поэтому предварительно позвоните мне или любым другим способом сообщите о предстоящей встрече.'}/>
                </Tab>
                <Tab eventKey="Реквизиты" title="Реквизиты">
                    Реквизиты
                </Tab>
            </Tabs>
            </ReactCSSTransitionGroup>
        </>
    );
};

export default Contacts;