import './App.css';
import CardButton from "./components/CardButton/CardButton";
import logo from './img/logo.svg'


import {Route, Routes, BrowserRouter} from "react-router-dom";

import Main from "./components/Main/Main";

function App() {
  return (
      <div>
    <BrowserRouter >

            <Routes>
                <Route exact path="/" element={ <Main/> }/>
            </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
