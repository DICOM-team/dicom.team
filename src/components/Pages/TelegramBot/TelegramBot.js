import React from 'react';
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ImgText from "../../Blocks/ImgText/imgText";
import Titleh2 from "../../Blocks/Title_H2/Titleh2";
import TextImg from "../../Blocks/TextImg/TextImg";
import MyForm from "../../Form/Form";
import Popup from "../../PopUp/Popup";
import WhiteBlock from "../../Blocks/WhiteBlock/WhiteBlock";
import SeparatorFree from "../../Blocks/Separator_free/Separator_free";
import s from './TelegramBot.module.css'

const TelegramBot = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);

    let Lists = {
        preimushestva: [
            {id: 1, title: 'Доступ с любых устройств.', text: 'Вы экономите, так как нет необходимости разрабатывать отдельные приложения для Android, IPhone и компьютера - диалоги автоматически синхронизируются со всеми устройствами.'},
            {id: 2, title: 'Мгновенные ответы.', text: 'Клиенты быстро получают ответы на вопросы в сообщениях от бота, это снижает время ответа на заявку, в результате конверсия увеличивается. Вы легко можете изменить ответы клиентам.'},
            {id: 3, title: 'Каналы и чаты.', text: 'Боты работают как независимо, так и внутри чатов, и позволяют получить мгновенный ответ, например, для уточнения цен на услуги и наличия товаров.'},
            {id: 4, title: 'Конфиденциальность.', text: 'Никто не получит доступ к вашей переписке с покупателями.'}
        ],
        takze: [
            {id: 1, title: 'Интеграция.', text: 'Боты без проблем интегрируются с бизнес-приложениями, такими так 1С, CRM, CMS.'},
            {id: 2, title: 'Быстрый доступ к контактам.', text: 'Боты позволяют быстро получить от клиентов контактные данные, такие как телефон и местонахождение, для передачи их менеджерам. Воронка продаж сокращается!'},
            {id: 3, title: 'Без регистрации.', text: 'Авторизация не требуется - достаточно установки клиента Telegram, которым сейчас пользуются более 500 000 000 человек.'},
            {id: 4, title: 'Прием оплаты.', text: 'Благодаря интеграции с платежными системами бот может принимать безопасные платежи от клиентов.'},
            {id: 5, title: 'Статистика.', text: 'У вас будет полная статистика обращений и переписок с клиентами.'}
        ]
    }
    let preimushestva = Lists.preimushestva.map ( (item) => {
        return (
            <div key={item.id} className={'row p-4'}>
                <div className={s.listNumber + ' col-1 col-lg-1 align-self-center'}>
                    {item.id}
                </div>
                <div className={'col-11 col-lg-3 text-start align-self-center'}>
                    <b>{item.title}</b>
                </div>
                <div className={'col-12 col-lg-8 text-start align-self-center'}>
                    {item.text}
                </div>
            </div>
        )
    })
    let takze = Lists.takze.map ( (item) => {
        return (
            <div key={item.id} className={'row p-4'}>
                <div className={s.listNumber + ' col-1 col-lg-1 align-self-center'}>
                    {item.id}
                </div>
                <div className={'col-11 col-lg-3 text-start align-self-center'}>
                    <b>{item.title}</b>
                </div>
                <div className={'col-12 col-lg-8 text-start align-self-center'}>
                    {item.text}
                </div>
            </div>
        )
    })
    return (
        <>
            <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
                <Titleh1 name={'Разработка приложений (ботов) для Telegram'} subname={'любой сложности'} />

                <SeparatorFree />

                <ImgText url={'/images/bot-telegram.png'} text={<>
                    <p>Телеграм-боты — это новый, быстро набирающий популярность инструмент для бизнеса, который позволяет компаниям упростить и снизить стоимость поддержки клиентов.</p>
                    <p>Стоимость разработки ботов в разы дешевле создания мобильного приложения, их не нужно устанавливать. По статистике, сегодня Telegram — это самый популярный мессенджер, проще говоря, почти вся ваша целевая аудитория им уже пользуются.</p>
                </>} title={'Разработка от 2 недель'} subname={'включает составлние ТЗ'}/>

                <SeparatorFree />

                <WhiteBlock content={<>
                    <Titleh2 name={'Преимущества Telegram-ботов'} subname={''} />
                    <p>
                {preimushestva}
                    </p>
                </>
                } />

                <SeparatorFree />

                <TextImg url={'/images/telega_phone.png'} text={<>
                    <p>Чат-боты способны автоматически консультировать клиентов, отвечать на вопросы, принимать оплату, высылать уведомления и многое другое. Фактически это позволит бизнесу работать на качественно новом уровне.</p>
                    <p>Боты Telegram решают почти любые задачи, которые встают перед бизнесом.</p>
                </>} Title={'Любые бизнес-задачи'} subname={''} />

                <SeparatorFree />

                <WhiteBlock content={ <>
                    <Titleh2 name={'А еще телеграм-боты могут'} subname={''} />
                    <p>
                        {takze}
                    </p>
                </>} />
                <SeparatorFree />
                <Popup button={'Консультация перед заказом'} title={'Бесплатная часовая консультация'} content={<><MyForm /></>}/>
            </ReactCSSTransitionGroup>
        </>
    );
}

export default TelegramBot;