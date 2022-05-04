import React from 'react';
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import Titleh3 from "../../Blocks/Title_H3/Titleh3";
import Accent from "../../Blocks/accent/Accent";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Tabs, Tab} from 'react-bootstrap';


const Contacts = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    return (
        <>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
            <Tabs defaultActiveKey="Контакты" id="uncontrolled-tab" className="mb-3">
                <Tab eventKey="Контакты" title="Контакты">
                    <Titleh2 name={'Наши контакты'} subname={'самый удобный способ Telegram'}/>
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
                    <Titleh3 name={'Реквизиты'} subname={'ИП Бакшандаев А.В.'} />

                        <table className={'table table-striped'}>
                            <tbody>
                            <tr>
                                <td valign="middle">
                                    Полное наименование
                                </td>
                                <td valign="middle">
                                   Индивидуальный предприниматель <br/> Бакшандаев Алексей Валерьевич
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle">
                                    Сокращенное наименование
                                </td>
                                <td valign="middle">
                                    ИП Бакшандаев А.В.
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle">
                                    ИНН
                                </td>
                                <td valign="middle">
                                    212906995375
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle">
                                    ОГРНИП
                                </td>
                                <td valign="middle">
                                    321213000010599
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle">
                                    E-mail
                                </td>
                                <td valign="middle">
                                    <a href="mailto:bavalex24@yandex.ru">bavalex24@yandex.ru</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <Titleh3 name={'Реквизиты банка'} subname={'Сбербанк'} />
                        <table className={'table table-striped'}>
                            <tbody>
                            <tr>
                                <td valign="middle">
                                    Расчетный счет
                                </td>
                                <td valign="middle">
                                    40802810775000001204
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle">
                                    Наименование банка
                                </td>
                                <td valign="middle">
                                    ЧУВАШСКОЕ ОТДЕЛЕНИЕ N8613 ПАО СБЕРБАНК
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle">
                                    Корреспондентский счет
                                </td>
                                <td valign="middle">
                                    30101810300000000609
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle">
                                    БИК
                                </td>
                                <td valign="middle">
                                    049706609
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <Accent context={
                            <>
                                ВНИМАНИЕ! Оплата счета по указанным реквизатам означает согласие с условиями договора-оферта, размещенного по адресу в сети интернет: http://bavalex.bitrix24.site/dogovoroferta/
                            </>
                        }/>

                </Tab>
            </Tabs>
            </ReactCSSTransitionGroup>
        </>
    );
};

export default Contacts;