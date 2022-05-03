import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ImgText from "../../Blocks/ImgText/imgText";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import TextImg from "../../Blocks/TextImg/TextImg";
import MyForm from "../../Form/Form";
import Popup from "../../PopUp/Popup";
import WhiteBlock from "../../Blocks/WhiteBlock/WhiteBlock";
import Separator_free from "../../Blocks/Separator_free/Separator_free";

const TelegramBot = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    return (
        <>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
            {/*<hr/>*/}
                <Titleh1 name={'Разработка приложений (ботов) для Telegram'} subname={'любой сложности'} />

                <Separator_free />

                <ImgText url={'/images/bot-telegram.png'} text={<>
                    <p>Телеграм-боты — это новый, быстро набирающий популярность инструмент для бизнеса, который позволяет компаниям упростить и снизить стоимость поддержки клиентов.</p>
                    <p>Стоимость разработки ботов в разы дешевле создания мобильного приложения, их не нужно устанавливать. По статистике, сегодня Telegram — это самый популярный мессенджер, проще говоря, почти вся ваша целевая аудитория им уже пользуются.</p>
                </>} title={'Разработка от 2 недель'} subname={'включает составлние ТЗ'}/>

                <Separator_free />

                <WhiteBlock content={
                    <TextImg url={'/images/telega_phone.png'} text={<>
                        <p>Чат-боты способны автоматически консультировать клиентов, отвечать на вопросы, принимать оплату, высылать уведомления и многое другое. Фактически это позволит бизнесу работать на качественно новом уровне.</p>
                        <p>Боты Telegram решают почти любые задачи, которые встают перед бизнесом.</p>
                    </>} Title={'Любые бизнес-задачи'} subname={''} />
                } />

                <Separator_free />

                <Titleh2 name={'Преимущества Telegram-ботов'} subname={''} />
                <p>
                    <b> Доступ с любых устройств.</b>
                    <p>
                    Вы экономите, так как нет необходимости разрабатывать отдельные приложения для Android, IPhone и компьютера - диалоги автоматически синхронизируются со всеми устройствами.
                    </p>
                    <b> Мгновенные ответы.</b>
                    <p>
                    Клиенты быстро получают ответы на вопросы в сообщениях от бота, это снижает время ответа на заявку, в результате конверсия увеличивается. Вы легко можете изменить ответы клиентам.
                    </p>
                    <b>Каналы и чаты.</b>
                    <p>
                    Боты работают как независимо, так и внутри чатов, и позволяют получить мгновенный ответ, например, для уточнения цен на услуги и наличия товаров.
                    </p>
                    <b>Конфиденциальность.</b>
                    <p>
                        Никто не получит доступ к вашей переписке с покупателями.
                    </p>
                </p>
                <Separator_free />
                <Titleh2 name={'А еще телеграм-боты могут'} subname={''} />
                <Separator_free />
                <p>
                    <b>Интеграция.</b>
                    <p>
                    Боты без проблем интегрируются с бизнес-приложениями, такими так 1С, CRM, CMS.
                    </p>
                    <b>Быстрый доступ к контактам.</b>
                    <p>
                    Боты позволяют быстро получить от клиентов контактные данные, такие как телефон и местонахождение, для передачи их менеджерам. Воронка продаж сокращается!
                    </p>
                    <b>Без регистрации.</b>
                    <p>
                    Авторизация не требуется - достаточно установки клиента Telegram, которым сейчас пользуются более 500 000 000 человек.
                    </p>
                    <b>Прием оплаты.</b>
                    <p>
                    Благодаря интеграции с платежными системами бот может принимать безопасные платежи от клиентов.
                    </p>
                    <b>Статистика.</b>
                    <p>
                    У вас будет полная статистика обращений и переписок с клиентами.
                    </p>
                </p>
                <Popup button={'Консультация перед заказом'} title={'Бесплатная часовая консультация'} content={<><MyForm /></>}/>
            </ReactCSSTransitionGroup>
        </>
    );
}

export default TelegramBot;