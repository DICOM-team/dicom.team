import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Main from "./components/Main/Main";
import Politic from "./components/Politic/Politic";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
      <div>
        <BrowserRouter >
            <Routes>
                <Route exact path="/" element={ <Main /> }/>
                <Route exact path="/Politic" element={ <Politic /> }/>
                <Route exact path="/Contacts" element={ <Contacts /> }/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
