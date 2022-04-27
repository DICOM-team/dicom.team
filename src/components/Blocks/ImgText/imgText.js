import s from './ImgText.module.css';
import Titleh2 from "../Title_H2/Titleh2";

const ImgText = (props) => {

    return (
        <div className={s.body}>
            <div className={s.item}>
                <img src={props.url} alt=""/>
            </div>
            <div className={s.item}>
                <div className={s.description}>
                    <Titleh2 name={props.title} subname={props.subname} />
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default ImgText