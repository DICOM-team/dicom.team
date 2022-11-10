import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import SeparatorFree from "../../Blocks/Separator_free/Separator_free";
import Separator from "../../Blocks/Separator/Separator";
import WhiteBlock from "../../Blocks/WhiteBlock/WhiteBlock";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import Titleh3 from "../../Blocks/Title_H3/Titleh3";
import MyForm from "../../Form/Form";
import Popup from "../../PopUp/Popup";

const OneC = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);

    return (
        <div>
            <Titleh1 name={'1C Франчайзи Диком'} subname={'Официальный партнер компании 1С в Чебоксарах'} />

            <SeparatorFree />

            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-xs-12 col-md-6'}>
                        <img src={'/images/sert/sert1C.jpg'} alt="Внедрение готового решения от ASPRO для БУС Битрикс" width={'100%'} />
                    </div>
                    <div className={'col-xs-12 col-md-6'}>
                        <Titleh3 name={'Удаленное обслуживание 1С или выезд программиста:'}/>
                        <p>
                            <h5>1 час работы специалиста</h5>1250 руб.(консультации)<br/><br/>
                            <h5>1 час работы специалиста</h5> 2500 руб. (программирование)
                        </p>
                        <p>Преимуществом разовой услуги является отсутствие постоянных платежей.</p>

                        <p>Вам предварительно оценивают стоимость работ, и вы платите ровно за тот объем услуг, который получили. </p>

                    </div>
                </div>

            </div>

            <SeparatorFree />

            <div>
                <Titleh3 name={'Типовые работы:'}/>
                <ul>
                    <li>Консультации по работе с программами 1С:Предприятие</li>
                    <li>Обновление и администрирование информационной системы</li>
                    <li>Консультирование по сдаче регламентированной отчетности.</li>
                    <li>Постпроектное сопровождение</li>
                    <li>Модификация информационной системы</li>
                </ul>

            </div>

            <Separator />

            <WhiteBlock content={<>
                <Titleh2 name={'Квалифицированный штат специалистов'}
                         subname={'Специалисты нашей компании сертифицированы фирмой 1С. Значительная часть сотрудников компании обладает несколькими сертификатами «1С:Профессионал», «1С:Специалист».' +
                         ' Каждый специалист компании имеет план личного обучения для расширения компетенций.'}/>
                <img src="/images/content/OneC/franch1C.jpg" alt="Франчайзи 1С в Чебоксарах" width={'75%'}/>
            </>
            } />

            <SeparatorFree />

            <Popup button={'Заказать бесплатную часовую консультацию'} title={'Бесплатная часовая консультация'} content={<><MyForm /></>}/>


        </div>
    );
};

export default OneC;