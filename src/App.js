import './App.css';
import CardButton from "./components/CardButton/CardButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1>DICOM.team</h1>
        </div>
        <div className={'CardsButtons'}>
            <CardButton number={'1'}/>
            <CardButton number={'2'}/>
            <CardButton number={'3'}/>
            <CardButton number={'4'}/>
            <CardButton number={'5'}/>
            <CardButton number={'6'}/>
            <CardButton number={'7'}/>
            <CardButton number={'8'}/>
            <CardButton number={'9'}/>
        </div>
          <div className={'CopyRight'}>
              политика конфиденциальности <br/>
              Copyright © 2021 Все права защищены
          </div>
      </header>
    </div>
  );
}

export default App;
