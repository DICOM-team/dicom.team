import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import Politic from "./components/Politic/Politic";
import Contacts from "./components/Pages/Contacts/Contacts";
import Uslugi from "./components/Pages/Uslugi/Uslugi";
import Services from "./components/Pages/Services/Services";
import Cases from "./components/Pages/Сases/Сases";
import Vacancy from './components/Pages/vacancy/Vacancy'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bitrix24 from "./components/Pages/Bitrix24/Bitrix24";
import TelegramBot from "./components/Pages/TelegramBot/TelegramBot";
import Team from "./components/Pages/Team/Team";
import NotFound from './components/NotFoundPages'
import { YMInitializer } from 'react-yandex-metrika';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter >
          <div className="App">
              <Header/>
              <div className={'main'}>
              <Routes>
                  <Route exact path="/" element={ <Main title={'DICOM.TEAM'} description={'Студия DICOM - цифровизация бизнеса!'}/> }/>
                  <Route exact path="/Politic" element={ <Politic title={'Политика конфиденциальности'} description={''}/> }/>
                  <Route exact path="/Contacts" element={ <Contacts title={'Dicom.Контакты'} description={'Страница с контактами DICOM'} /> }/>
                  <Route exact path="/uslugi" element={ <Uslugi title={'Dicom.Приложения'} description={'Разработка приложений, телеграм ботов и других сервисов для бизнеса'}/> }/>
                  <Route exact path="/services" element={ <Services title={'DICOM.Cервисы'} description={'Сервисы разработанные студией DICOM'} /> }/>
                  <Route exact path="/cases" element={ <Cases title={'Dicom.Кейсы'} description={'Порфолио студии DICOM'}/> }/>
                  <Route exact path="/team" element={ <Team title={'Dicom.Команда'} description={'Команда студии DICOM'}/> }/>
                  <Route exact path="/vacancys" element={ <Vacancy title={'Dicom.Вакансии'} description={'Вакансии студии DICOM'}/> }/>
                  <Route exact path="/promotion" element={ <Contacts title={'Dicom.Поддержка'} description={'Служба поддержки DICOM'}/> }/>
                  <Route exact path="/bitrix24" element={ <Bitrix24 title={'Dicom.Битрикс24'} description={'Золотой партнер Битркис24 - компания DICOM, более 10 лет внедрений, более 20 крупных проектов.'}/> }/>
                  <Route exact path="/1c" element={ <Contacts title={'Dicom.1C'} description={'Интеграции различных систем с 1С:Предпиятием'}/> }/>
                  <Route exact path="/telegram-bot" element={ < TelegramBot title={'Dicom.Telegram'} description={'Разработка ботов для telegram любой сложности от 5000 руб.'}/> }/>
                  <Route exact path="*" element={<NotFound/>} />
              </Routes>
              </div>
              <Footer/>
              <YMInitializer accounts={[88635494]} options={{webvisor: true}} version="2" />
          </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

