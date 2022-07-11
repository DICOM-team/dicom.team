import React, { useState, useRef, useEffect, useCallback } from "react";

const Ws = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("");
    const ws = useRef(null);

    useEffect(() => {
        if (!isPaused) {
            ws.current = new WebSocket("wss://ws.kraken.com/"); // создаем ws соединение
            // let ConnectionID = ws.current.connectionID;
            ws.current.onopen = () => setStatus("Соединение открыто");  // callback на ивент открытия соединения
            ws.current.onclose = () => setStatus("Соединение закрыто"); // callback на ивент закрытия соединения

            console.log(ws.current)

            // ws.current.message = () => {console.log('ddddddddd')}
            gettingData()

        }
        return () => ws.current.close(); // кода меняется isPaused - соединение закрывается

    }, [ws, isPaused]);

    const gettingData = useCallback(() => {
        if (!ws.current) return;

        ws.current.onmessage = e => {                //подписка на получение данных по вебсокету
            if (isPaused) return;
            const message = JSON.parse(e.data);
            setData(message);
            console.log(message)
        };
    }, [isPaused]);

    return (
        <>
            {!!data &&
            <div>
                <div>
                    <h2>{status}</h2>
                    <p>{`connection ID: ${data?.connectionID}`}</p>
                    {/*{console.log(data)}*/}
                    <p>{`event: ${data?.event}`}</p>
                    <p>{`ОТвет: ${data?.reqid}`}</p>
                    <p>{`Статус: ${data?.status}`}</p>
                    <p>{`version: ${data?.version}`}</p>
                    <p>{`subscription: ${data?.subscription}`}</p>
                </div>
                <button onClick={() => {
                    ws.current.close();
                    setIsPaused(!isPaused)
                }}>{!isPaused ? 'Остановить соединение' : 'Открыть соединение' }</button>
                <button onClick={() => {
                    ws.current.send (JSON.stringify(
                        {
                            "event": "heartbeat"
                        }
                    ));
                }}>ОТправить</button>
            </div>
            }
        </>
    )
}

export default Ws;