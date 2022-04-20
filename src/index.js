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
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bitrix24 from "./components/Pages/Bitrix24/Bitrix24";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter >
          <div className="App">
              <Header/>
              <Routes>
                  <Route exact path="/" element={ <Main title={'DICOM.TEAM'} description={'Студия DICOM - цифровизация бизнеса!'}/> }/>
                  <Route exact path="/Politic" element={ <Politic title={'Политика конфиденциальности'} description={''}/> }/>
                  <Route exact path="/Contacts" element={ <Contacts title={'Dicom.Контакты'} description={'Страница с контактами DICOM'} /> }/>
                  <Route exact path="/uslugi" element={ <Uslugi title={'Dicom.Приложения'} description={'Разработка приложений, телеграм ботов и других сервисов для бизнеса'}/> }/>
                  <Route exact path="/services" element={ <Services title={'DICOM.Cервисы'} description={'Сервисы разработанные студией DICOM'} /> }/>
                  <Route exact path="/cases" element={ <Cases title={'Dicom.Кейсы'} description={'Порфолио студии DICOM'}/> }/>
                  <Route exact path="/team" element={ <Contacts title={'Dicom. Контакты'} description={'Контакты студии DICOM'}/> }/>
                  <Route exact path="/vacancys" element={ <Contacts title={'Dicom.Вакансии'} description={'Вакансии студии DICOM'}/> }/>
                  <Route exact path="/promotion" element={ <Contacts title={'Dicom.Поддержка'} description={'Служба поддержки DICOM'}/> }/>
                  <Route exact path="/bitrix24" element={ <Bitrix24 title={'Dicom.Битрикс24'} description={'Золотой партнер Битркис24 - компания DICOM, более 10 лет внедрений, более 20 крупных проектов.'}/> }/>
                  <Route exact path="/1c" element={ <Contacts title={'Dicom.1C'} description={'Интеграции различных систем с 1С:Предпиятием'}/> }/>
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

