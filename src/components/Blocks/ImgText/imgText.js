import s from './ImgText.module.css';
import Title_h2 from "../Title_H2/Title_h2";

const ImgText = (props) => {

    return (
        <div className={s.body}>
            <div className={s.item}>
                <img src={props.url} alt=""/>
            </div>
            <div className={s.item}>
                <div className={s.description}>
                    <Title_h2 name={props.title} subname={props.subname} />
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default ImgText