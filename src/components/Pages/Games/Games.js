import React, { useState } from 'react'
import s from './Games.module.css'
import Titleh1 from "../../Blocks/Title_H1/Titleh1";

const Games = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);

    const [ counter, setCounter ] = useState(0)
    const [ speed, setSpeed ] = useState(5000)
    const [ idInterval, setIdInterval] = useState(0)

    // Изменение скорости генерации Яиц
    let start = () => {
        console.log('start сработал')
        let idInter
        idInter = setInterval ( ()=> {
            egg()
            },
            speed
        )
        setIdInterval(idInter)
    }
    let stop = () => {
        console.log('id ' + idInterval + ' по stop')
        clearInterval(idInterval)

    }

    let egg = () => {
        let rnd = Math.floor(Math.random() * 4 + 1)
        console.log ('Процедура с яйцами ----------- ' + speed)
        for (let i = 1; i < 6; i++) {
            setTimeout(() => {
                    let id = i + (5 * rnd - 5)
                    let elem = document.getElementById(id)
                    elem.style.fontWeight = '500'
                    elem.style.color = 'red'
                    setTimeout(() => {
                        elem.style.fontWeight = '100'
                        elem.style.color = 'white'
                    }, 900)
                },
                i * 1000
            )
        }
    }

    let newSpeed = ()=> {
        stop()
        setSpeed(speed -50)
        start()
    }

    return (
        <div>
                {/*<hr/>*/}
                <Titleh1 name={'Ну погоди!'} subname={'игровая приставка из СССР'} />

                <div>
                    <div>{speed}</div>
                    <button onClick={start}>Старт</button>
                    <button onClick={stop}>Стоп</button>
                    <button onClick={newSpeed}>Скорость</button>
                </div>
                <div id={'convas'} className={s.convas}>

                    <div> {/*Левые яйца */}
                        <div className={s.eggsLt}>
                            <div id='1'>1</div>
                            <div id='2'>2</div>
                            <div id='3'>3</div>
                            <div id='4'>4</div>
                            <div id='5'>5</div>
                        </div>
                        <div className={s.break}></div>
                        <div className={s.eggsLb}>
                            <div id={'6'}>1</div>
                            <div id={'7'}>2</div>
                            <div id={'8'}>3</div>
                            <div id={'9'}>4</div>
                            <div id={'10'}>5</div>
                        </div>
                    </div>

                    <div className={s.wolf}>  {/*Волк*/}
                        <div> aa </div>
                        <div> bb </div>
                    </div>


                    <div> {/*Правые яйца*/}
                        <div className={s.eggsRt}>
                            <div id={'11'}>1</div>
                            <div id={'12'}>2</div>
                            <div id={'13'}>3</div>
                            <div id={'14'}>4</div>
                            <div id={'15'}>5</div>
                        </div>
                        <div className={s.break}></div>
                        <div className={s.eggsRb}>
                            <div id={'16'}>1</div>
                            <div id={'17'}>2</div>
                            <div id={'18'}>3</div>
                            <div id={'19'}>4</div>
                            <div id={'20'}>5</div>
                        </div>
                    </div>

                </div>

        </div>
    );
};

export default Games;