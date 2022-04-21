import s from './ThreeColums.module.css';
import Title_h3 from "../Title_H3/Title_h3";

const ThreeColums = (props) => {

    return (
        <div className={s.body}>
            <div className={'col-12 col-md-6 col-lg-4 p-3'}>
                <Title_h3 name={props.TextColum1} />
                <p>
                    {props.Text1}
                </p>
            </div>
            <div className={'col-12 col-md-6 col-lg-4 p-3'}>
                <Title_h3 name={props.TextColum2} />
                <p>
                    {props.Text2}
                </p>
            </div>
            <div className={'col-12 col-md-6 col-lg-4 p-3'}>
                <Title_h3 name={props.TextColum3} />
                <p>
                    {props.Text3}
                </p>
            </div>
        </div>
    )
}

export default ThreeColums