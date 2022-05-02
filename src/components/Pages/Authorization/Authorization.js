import React from "react";
import Titleh1 from "../../Blocks/Title_H1/Titleh1";
import Input from "../../Input";
import Button from "../../Buttons";
import Separator_free from "../../Blocks/Separator_free/Separator_free";

const Authorization = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    document.documentElement.scrollIntoView(true);
    return (
        <>
            <Titleh1 name={'ВХОД'} subname={'только для сотрудников компании'} />
            <div className={'flex-center'}>
                <form onSubmit={''}>

                    <Input inputtype={'text'}
                           title={'LOGIN'}
                           name={'Логин'}
                           // value={this.state.newLead.name}
                           placeholder={'Логин'}
                           // handleChange={this.handleInput}

                    /> {/* Name of the user */}

                    <Input inputtype={'number'}
                           name={'Пароль'}
                           title={'PASSWORD'}
                           // value={this.state.newLead.phone}
                           placeholder={'Пароль'}
                           // handleChange={this.handlePhone}/> {/* Age */}

                    />
                    <hr/>
                    <Button
                        action={'this.handleFormSubmit'}
                        type={'success'}
                        title={'Отправить'}
                        // style={buttonStyle}
                    /> { /*Submit */}

                    <Button
                        action={'this.handleClearForm'}
                        type={'secondary'}
                        title={'Очистить'}
                        // style={buttonStyle}
                    /> {/* Clear the form */}

                </form>
            </div>
            <Separator_free />
        </>
    )
}

export default Authorization