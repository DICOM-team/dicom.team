import React from 'react';
import s from './Eggs.module.css'

const Eggs = (props) => {
    // Генерируем пят яиц
    let eggs = []
    for (let i=props.i+1; i<props.i+6; i++) {
        eggs.push(i)
    }
    // Преобразуем массив в элементы
    let result = eggs.map ( (item, index) => {
        return (<div key={index} id={item}>0</div>)

    })
    // Проверяем если яйца правые, то сортируем наоборот
    if (props.position=='right') {
        result.sort(( a, b ) =>  b.key - a.key)
    }

    return (
        <>
            <div className={s.eggs}>
                {result}
            </div>
        </>
    );
};

export default Eggs;