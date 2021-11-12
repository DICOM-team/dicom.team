import './App.css';
import CardButton from "./components/CardButton/CardButton";
import logo from './img/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <img src={logo} alt="DICOM компания"/>
        </div>
        <div className={'CardsButtons'}>
            <CardButton number={'1'} name={'Услуги'}/>
            <CardButton number={'2'} name={'Сервисы'}/>
            <CardButton number={'3'} name={'Кейсы'}/>
            <CardButton number={'4'} name={'Команда'}/>
            <CardButton number={'5'} name={'Вакансии'}/>
            <CardButton number={'6'} name={'Контакты'} img={'/img/contacts.png'} />
            <CardButton number={'7'} name={'Продвижение'}/>
            <CardButton number={'8'} name={'Битрикс24'} img={'/img/bitrix24.png'}/>
            <CardButton number={'9'} name={'1С'}/>
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
