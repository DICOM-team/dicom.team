import React from "react";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

const NotFoundPages = () => {
    return (
        <>
            <h1>404</h1>
            <Row>
                <Col xs={12} sm={6} md={8} lg={6}>
                    <p>404 Page Not Found (она же – ошибка 404 или «страница не найдена») – это код состояния, в котором пребывает HTTP. Для самых любопытных: первая цифра кода “4” – обозначение неточности со стороны пользователя, а именно неверно введенный URL или попытка открыть уже/ещё несуществующую страницу; код “04” – тот самый “Not Found”, а именно вполне конкретная ошибка.</p>
                    <Link to={'/'}>На главную страницу</Link>
                </Col>
                <Col>
                    <img width={'50%'} src="/images/content/bot_404.png" alt="Ничего не нашли на сайте DICOM"/>
                </Col>
            </Row>
        </>
    )
}

export default NotFoundPages