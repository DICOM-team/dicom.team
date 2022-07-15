import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import Politic from "./components/Politic/Politic";
import Contacts from "./components/Pages/Contacts/Contacts";
import ContactsInside from "./components/Pages/Contacts/ContactsInside";
import Uslugi from "./components/Pages/Uslugi/Uslugi";
import Services from "./components/Pages/Services/Services";
import Cases from "./components/Pages/Сases/Сases";
import Vacancy from './components/Pages/vacancy/Vacancy'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bitrix24 from "./components/Pages/Bitrix24/Bitrix24";
import Aspro from "./components/Pages/Aspro/Aspro";
import Tilda from "./components/Pages/Tilda/Tilda";
import TelegramBot from "./components/Pages/TelegramBot/TelegramBot";
import Team from "./components/Pages/Team/Team";
import NotFound from './components/NotFoundPages';
import Authorization from './components/Pages/Authorization/Authorization';
import { YMInitializer } from 'react-yandex-metrika';
import Websocket from "./components/Pages/Websocket/Websocket";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter >
          <Header/>
          <div className="App">
              <div className={'main'}>
                  <Routes>
                      <Route path="/" element={ <Main title={'DICOM.TEAM'} description={'Студия DICOM - цифровизация бизнеса!'}/> }/>
                      <Route path="/Politic" element={ <Politic title={'Политика конфиденциальности'} description={'Политика конфиденциальности компании DICOM'}/> }/>
                      <Route path="/Contacts/" element={ <Contacts title={'Dicom.Контакты'} description={'Страница с контактами DICOM'} /> } />
                      <Route path="/Contacts/" element={ <ContactsInside title={'Dicom.Контакты'} description={'Страница с контактами DICOM'} /> } >
                          <Route path="new" element={ <Team title={'Dicom.Команда'} description={'Команда студии DICOM'}/> }/>
                      </Route>
                      <Route path="/uslugi" element={ <Uslugi title={'Dicom.Приложения'} description={'Разработка приложений, телеграм ботов и других сервисов для бизнеса'}/> }/>
                      <Route path="/services" element={ <Services title={'DICOM.Cервисы'} description={'Сервисы разработанные студией DICOM'} /> }/>
                      <Route path="/cases" element={ <Cases title={'Dicom.Кейсы'} description={'Порфолио студии DICOM'}/> }/>
                      <Route path="/team" element={ <Team title={'Dicom.Команда'} description={'Команда студии DICOM'}/> }/>
                      <Route path="/vacancys" element={ <Vacancy title={'Dicom.Вакансии'} description={'Вакансии студии DICOM'}/> }/>
                      <Route path="/promotion" element={ <Contacts title={'Dicom.Поддержка'} description={'Служба поддержки DICOM'}/> }/>
                      <Route path="/bitrix24" element={ <Bitrix24 title={'Dicom.Битрикс24'} description={'Золотой партнер Битркис24 - компания DICOM, более 10 лет внедрений, более 20 крупных проектов.'}/> }/>
                      <Route path="/tilda" element={ <Tilda title={'Dicom.Tilda'} description={'Создание сайтов на Tilda'}/> }/>
                      <Route path="/aspro" element={ <Aspro title={'Dicom.Aspro'} description={'Создание сайтов 1C Битрикс на готовом решении ASPRO'}/> }/>
                      <Route path="/1c" element={ <Contacts title={'Dicom.1C'} description={'Интеграции различных систем с 1С:Предпиятием'}/> }/>
                      <Route path="/telegram-bot" element={ <TelegramBot title={'Dicom.Telegram'} description={'Разработка ботов для telegram любой сложности от 5000 руб.'}/> }/>
                      <Route path="/admin" element={ <Authorization title={'Dicom.Вход'} description={'Вход'}/> }/>
                      <Route path="*" element={<NotFound/>} />
                      <Route path="/websocket" element={<Websocket/>} />
                  </Routes>
              </div>
          </div>
          <Footer/>
          <YMInitializer accounts={[88635494]} options={{webvisor: true}} version="2" />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);