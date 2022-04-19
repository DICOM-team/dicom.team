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
                  <Route exact path="/" element={ <Main /> }/>
                  <Route exact path="/Politic" element={ <Politic /> }/>
                  <Route exact path="/Contacts" element={ <Contacts /> }/>
                  <Route exact path="/uslugi" element={ <Uslugi /> }/>
                  <Route exact path="/services" element={ <Services /> }/>
                  <Route exact path="/cases" element={ <Cases /> }/>
                  <Route exact path="/team" element={ <Contacts /> }/>
                  <Route exact path="/vacancys" element={ <Contacts /> }/>
                  <Route exact path="/promotion" element={ <Contacts /> }/>
                  <Route exact path="/bitrix24" element={ <Bitrix24 /> }/>
                  <Route exact path="/1c" element={ <Contacts /> }/>
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

