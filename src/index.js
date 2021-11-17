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

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter >
          <div>
              <Header/>
          </div>
          <div>
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
              <Route exact path="/bitrix24" element={ <Contacts /> }/>
              <Route exact path="/1c" element={ <Contacts /> }/>
          </Routes>
          </div>
          <div>
              <Footer/>
          </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

