import React, { useState } from 'react'
import s from './Games.module.css'
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Eggs from "../../Games/NuPogodi/Eggs/Eggs";
import DicomButton from "../../UI/Button/DicomButton";

const Games = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);

    const [ wolf, setWolf ] = useState(1)
    const [ speed, setSpeed ] = useState(5000)
    const [ idInterval, setIdInterval] = useState(0)
    const [ score, setScore] = useState(0)
    const [ scoreBad, setScoreBad] = useState(0)

    // Изменение скорости генерации Яиц
    let start = () => {
        console.log('start сработал')
        let idInter
        idInter = setInterval ( ()=> {
            let rnd = Math.floor(Math.random() * 4 + 1)
            egg(rnd, wolf)
            },
            speed
        )
        setIdInterval(idInter)
    }
    let stop = () => {
        console.log('id ' + idInterval + ' по stop')
        clearInterval(idInterval)

    }

    let egg = (rnd, inerwolf) => {
        console.log ('Процедура с яйцами ----------- на скорости -' + speed)
        for (let i = 1; i < 7; i++) {
            // Запуск цикла яйца
            setTimeout(() => {
                // Шестой цикл генерации яйца проверка на поймал
                if (i===6) {
                    let position = Number(getPositionWolf())
                    console.log('проверка на поймал -- рандом -------------- ' + rnd)
                    console.log('Позиция волка переданная при запуске яйца ' + inerwolf)
                    console.log('Забрали позицию сами ---------------------- ' + position)
                    if (rnd === position) {
                        // let elm = document.getElementById('result')
                        // elm.innerHTML = 'Поймал!!!'
                        let score2 = Number(document.getElementById('score').innerHTML)
                        setScore(score2 + 1)
                        // console.log("Поймал !!!!!!")
                    } else {
                        // let elm = document.getElementById('result')
                        // elm.innerHTML = "бум-бум-бум"
                        let scoreBad2 = Number(document.getElementById('scoreBad').innerHTML)
                        setScoreBad(scoreBad2 + 1)
                        // console.log("бум-бум-бум")
                    }
                }
                else {
                    console.log('Цикл яйца ' + i + ' волк ' + inerwolf)
                    let id = i + (5 * rnd - 5)
                    let elem = document.getElementById(id)
                    elem.style.fontWeight = '500'
                    elem.style.color = 'Black'

                    setTimeout(() => {
                        elem.style.fontWeight = '100'
                        elem.style.color = '#CFE8EFFF'
                    }, 900)
                    }
                },
                i * 1000
            )
        }
    }
    // Изменение скорости по кнопке
    let newSpeed = ()=> {
        stop()
        setSpeed(speed -50)
        start()
    }

    // Функция получения позиции волка
    let getPositionWolf = ()=> {
        let elm = document.getElementById('position')
        let pos = elm.innerHTML
        return pos
    }

    return (
        <div>
                {/*<hr/>*/}
                {/*<Titleh1 name={'Ну погоди!'} subname={'игровая приставка из СССР'} />*/}

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <DicomButton color='#A4F3A59E' onClick={start}>Старт</DicomButton>
                    <DicomButton color='#FD9898C3' onClick={stop}>Стоп</DicomButton>
                    <DicomButton onClick={newSpeed}>Скорость {speed}</DicomButton>
                    <br></br>

                </div>
                <div id={'convas'} className={s.convas}>

                    <div> {/*Левые яйца */}
                        <Eggs position={'left'} i={5}/>
                        <div className={s.break}></div>
                        <Eggs position={'left'} i={0}/>
                        <div className={s.break}></div>
                    </div>

                    <div id={'wolf'} className={s.wolf}>  {/*Волк*/}
                        <img src="/images/wolf/1.png"/>
                    </div>


                    <div> {/*Правые яйца*/}
                        <Eggs position={'right'} i={10}/>
                        <div className={s.break}></div>
                        <Eggs position={'right'} i={15}/>
                        <div className={s.break}></div>
                    </div>

                </div>
            {/*Блок кнопок управления*/}
            <div className={s.convas}>
                <DicomButton onClick={() => {
                    setWolf(2)
                    let elm = document.getElementById('wolf')
                    elm.innerHTML = '<img src="/images/wolf/2.png"/>'
                }
                }>Верх лево</DicomButton>
                <DicomButton onClick={() => {
                    setWolf(3)
                    let elm = document.getElementById('wolf')
                    elm.innerHTML = '<img src="/images/wolf/3.png"/>'
                }
                }>Верх право</DicomButton>
                <div className={s.break_buttons}></div>
                <DicomButton onClick={() => {
                    setWolf(1)
                    let elm = document.getElementById('wolf')
                    elm.innerHTML = '<img src="/images/wolf/1.png"/>'
                }
                }>Низ лево</DicomButton>
                <DicomButton onClick={() => {
                    setWolf(4)
                    let elm = document.getElementById('wolf')
                    elm.innerHTML = '<img src="/images/wolf/4.png"/>'
                }
                }>Низ право</DicomButton>
            </div>

            <div id={'result'}>
                Поймал {score}
            </div>
            <div id={'Drop'}>
                Разбил {scoreBad}
            </div>
            <div id={'position'} className={s.hide}>
                {wolf}
            </div>
            <div id={'score'} className={s.hide}>
                {score}
            </div>
            <div id={'scoreBad'} className={s.hide}>
                {scoreBad}
            </div>

        </div>
    );
};

export default Games;