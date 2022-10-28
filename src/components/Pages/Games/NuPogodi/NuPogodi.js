import React, {useRef, useState} from 'react'
import s from './NuPogodi.module.css'
import Titleh1 from "../../../Blocks/Title_H1/Titleh1";
import Eggs from "./Eggs/Eggs";
import Wolf from "./wolf/Wolf";
import DicomButton from "../../../UI/Button/DicomButton";

const NuPogodi = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);

    const [ wolf, setWolf ] = useState(1)
    const [ speed, setSpeed ] = useState(5000)
    const [ idInterval, setIdInterval] = useState(0)
    const [ score, setScore] = useState(0)
    const [ scoreBad, setScoreBad] = useState(0)
    const [ gameTime, setGameTime] = useState(0)
    const [ gameCount, setGameCount] = useState(0)

    let refScore = useRef()
    let refScoreBad = useRef()
    let refTime = useRef()
    let refSpeed = useRef()
    let refGameCount = useRef()
    // !!! Надо свой хук написать
    // const [ gameStarted, setGameStarted] = useState(false)

    // Запуск яиц
    let start = () => {
        console.log('start сработал')
        // Убираем шапку
        let head = document.getElementById('head')
        let main = document.getElementsByClassName('main')
        head.style.display = 'none'
        main[0].style.marginTop = '0px'

        let idInter
        idInter = setInterval ( ()=> {
                let GameCount = Number(refGameCount.current.innerHTML)
                let timeNow = Number(refTime.current.innerHTML)
                let speedNow = Number(refSpeed.current.innerHTML)
                    if (GameCount > speedNow) {
                            let rnd = Math.floor(Math.random() * 4 + 1)
                            egg(rnd, wolf)
                            setGameCount( 0)
                            setSpeed((speedNow<500) ? 500 : (speedNow - 500))
                        } else
                    {
                        setGameCount( GameCount + 10)
                    }
                    setGameTime((Number(timeNow.toFixed(2)) + 0.01).toFixed(2))
            },
            10
        )
        setIdInterval(idInter)
    }

    let stop = () => {
        let head = document.getElementById('head')
        let main = document.getElementsByClassName('main')
        head.style.display = ''
        main[0].style.marginTop = '190px'
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
                   if (rnd === position) {
                        setScore(Number(refScore.current.innerHTML) + 1)
                    } else {
                        setScoreBad(Number(refScoreBad.current.innerHTML) + 1)
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
            <div>
                <span ref={refTime}>{gameTime}</span> секунд
            </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div id={'result'}>
                        Поймал {score}
                    </div>
                    <DicomButton color='#A4F3A59E' onClick={start}>Старт</DicomButton>
                    <DicomButton color='#FD9898C3' onClick={stop}>Стоп</DicomButton>
                    <DicomButton onClick={newSpeed}>Скорость {speed}</DicomButton>
                    <div id={'Drop'}>
                        Разбил {scoreBad}
                    </div>
                    <br></br>

                </div>
                <div id={'convas'} className={s.convas}>

                    <div> {/*Левые яйца */}
                        <Eggs position={'left'} i={5}/>
                        <div className={s.break}></div>
                        <Eggs position={'left'} i={0}/>
                        <div className={s.break}></div>
                    </div>

                    {/*Волк*/}
                   <Wolf position={wolf}/>

                    <div> {/*Правые яйца*/}
                        <Eggs position={'right'} i={10}/>
                        <div className={s.break}></div>
                        <Eggs position={'right'} i={15}/>
                        <div className={s.break}></div>
                    </div>

                </div>
            {/*Блок кнопок управления*/}
            <div className={s.convas}>
                <DicomButton onClick={() => setWolf(2)}>Верх лево</DicomButton>
                <DicomButton onClick={() => setWolf(3)}>Верх право</DicomButton>
                <div className={s.break_buttons}></div>
                <DicomButton onClick={() => setWolf(1)}>Низ лево</DicomButton>
                <DicomButton onClick={() => setWolf(4)}>Низ право</DicomButton>
            </div>

            <Titleh1 name={'Ну погоди!'} subname={'игровая приставка из СССР'} />

            <div id={'position'} className={s.hide}>
                {wolf}
            </div>
            <div ref={refScore} className={s.hide}>
                {score}
            </div>
            <div ref={refScoreBad} className={s.hide}>
                {scoreBad}
            </div>
            <div ref={refSpeed} className={s.hide}>
                {speed}
            </div>
            <div ref={refGameCount} className={s.hide}>
                {gameCount}
            </div>

        </div>
    );
};

export default NuPogodi;