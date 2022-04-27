import s from './TextImg.module.css';
import Titleh2 from "../Title_H2/Titleh2";

const TextImg = (props) => {

    return (
        <div className={s.body}>
            <div className={s.item}>
                <div className={s.description}>
                    <Titleh2 name={props.Title} subname={''} />
                    {props.text}
                </div>
            </div>
            <div className={s.item}>
                <img src={props.url} alt=""/>
            </div>
        </div>
    )
}

export default TextImg