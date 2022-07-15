import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import Accent from "../../Blocks/accent/Accent";
import Separator from "../../Blocks/Separator/Separator";
import SeparatorFree from "../../Blocks/Separator_free/Separator_free";
import ImgText from "../../Blocks/ImgText/imgText";
import TextImg from "../../Blocks/TextImg/TextImg"
import ThreeColums from "../../Blocks/ThreeColums/ThreeColums";
import Popup from "../../PopUp/Popup";
import WhiteBlock from "../../Blocks/WhiteBlock/WhiteBlock";
import MyForm from "../../Form/Form";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Aspro = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);

    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>

                <Titleh1 name={'Разработка сайтов на 1С-Битрикс'} subname={'Запуск сайта на готовом решении; миграция, переезд на 1С-Битрикс. Доработка, развитие и продвижение.'} />

                {/*<img src={'/images/sert/b24.png'} alt="Внедрение Битркис24 от DICOM" width={'75%'} />*/}

                <Separator />

                <WhiteBlock content={<>
                    <Titleh2 name={'Внедрение готовых решений от «Аспро»'}
                             subname={'Мы оказываем полный спектр услуг по настройке и доработке готовых сайтов и интернет-магазинов разработанных в Аспро и работающих на 1С-Битрикс. Занимаемся продвижением, оптимизацией под поисковые системы. У нас можно заказать установку SSL-сертификата для Битрикс, настройку «Яндекс.Директ» и любые другие услуги.'}/>
                    <img src="/images/content/Aspro/benefit_1.jpg.webp" alt="Сайт на Aspro"/>
                </>
                } />

                <SeparatorFree />

                <ImgText url={'/images/content/Aspro/benefit_2.jpg.webp'} text={<> <p>
                    Современное решение для быстрого запуска интернет-магазина. Продуманный функционал для разных отраслей бизнеса.
                </p></>} title={'Что такое АСПРО'} subname={''} />

                <SeparatorFree />


                <Titleh2 name={'Легко и быстро запустить'} subname={'Дешевле сайта с нуля'} />

                <Separator />

                <WhiteBlock content={
                    <ThreeColums TextColum1={'Тематики'}
                                 Text1={'Выберите подходящую тематику или настройте сайт самостоятельно через гибкие настройки: измените цветовую гамму, расположение блоков и др.'}
                                 TextColum2={'Контент'}
                                 Text2={'Загрузите изображения или воспользуйтесь нашим готовым набором контента. Мы подготовили баннеры и картинки, чтобы вы могли быстрее начать продажи.'}
                                 TextColum3={'Товары'}
                                 Text3={'Расскажите о компании и ее преимуществах, загрузите каталог товаров и услуг и начните получать прибыль.'}
                    />
                }/>

                <Separator />

                <div>
                    <a className={'link'} href="https://aspro.ru/marketplace/solutions/aspro.max/">Подробнее с Aspro можно ознакомиться на официальном сайте</a>
                </div>

                <SeparatorFree />

                <img src="/images/content/Aspro/30.jpg.webp" alt="Сайт на Aspro"/>

                <SeparatorFree />

                <Titleh1 name={'Цены на разработку'} subname={'Обязательно необходимо купить лицензию 1С-Битрикс в редакции от "малый бизнес"'} />

                <WhiteBlock content={
                    <ThreeColums TextColum1={'БУС 1С-Битрикс'}
                                 Text1={'Редакция "Малый Бизнес" -  стоимость лицензии 35 900 руб. Редакция "Бизнес" - стоимость лицензии 72 900 руб.'}
                                 TextColum2={'Лицензия Aspro'}
                                 Text2={'Редакция "max" - стоиомсть 52 900 руб.'}
                                 TextColum3={'Разработка'}
                                 Text3={'Стоимость разработки от 40 000 руб.'}
                    />
                }/>

                <SeparatorFree />

                <Popup button={'Заказать бесплатную часовую консультацию'} title={'Бесплатная часовая консультация'} content={<><MyForm /></>}/>

            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Aspro;