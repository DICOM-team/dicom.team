import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import Politic from "./components/Politic/Politic";
import Contacts from "./components/Pages/Contacts/Contacts";
import Services from "./components/Pages/Services/Services";
import Uslugi from "./components/Pages/Uslugi/Uslugi";
import Cases from "./components/Pages/Сases/Сases"

function App() {
    return (
      <div>
        <BrowserRouter >
            <Routes>
                <Route exact path="/" element={ <Main /> }/>
                <Route exact path="/Politic" element={ <Politic /> }/>
                <Route exact path="/admin" element={ <Admin /> }/>
                <Route exact path="/moder" element={ <Moder /> }/>
                <Route exact path="/user" element={ <User /> }/>
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
        </BrowserRouter>
      </div>
  );
}

export default App;
