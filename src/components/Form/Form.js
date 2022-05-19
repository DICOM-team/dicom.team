import React, {Component} from 'react';

/* Import Components */
import CheckBox from '../ChekBox';
import Input from '../Input';
import TextArea from '../TextArea';
// import Select from '../Select';
import Button from '../Buttons'
import {Form} from '../../State/State'

class FormContainer extends Component {
    constructor(props) {
        super(props);
        let send_now = (Form.send) ? true : false
        // console.log(send_now)
        this.state = {
            newLead: {
                name: '',
                phone: '',
                // gender: '',
                skills: [],
                about: '',
                send: send_now
            },

            // genderOptions: ['Male', 'Female', 'Others'],
            skillOptions: ['Битрикс24', 'Мобильное приложение', 'Telegram bot']

        }

        this.handleTextArea = this.handleTextArea.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        // this.handleFullName = this.handleFullName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleInput = this.handleInput.bind(this);
        // console.log(this.state.newLead.send)
    }

    /* This lifecycle hook gets executed when the component mounts */

    // handleFullName(e) {
    //     let value = e.target.value;
    //     this.setState( prevState => ({ newLead :
    //             {...prevState.newLead, name: value
    //             }
    //     }), () => console.log(this.state.newUser))
    // }

    handlePhone(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newLead :
                {...prevState.newLead, phone: value
                }
        }))
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => ({ newLead :
                {...prevState.newLead, [name]: value
                }
        }))
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(prevState => ({
            newLead: {
                ...prevState.newLead, about: value
            }
        }), ()=>console.log(this.state.newLead))
    }


    handleCheckBox(e) {

        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.newLead.skills.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.newLead.skills.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.newLead.skills, newSelection];
        }

        this.setState( prevState => ({ newLead:
                    {...prevState.newLead, skills: newSelectionArray }
            })
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();
        // let userData = this.state.newUser;
        let DataLead =  {
            fields:
                {
                    "TITLE": "Заказ с сайта от " + this.state.newLead.name,
                    "NAME": this.state.newLead.name,
                    "STATUS_ID": "NEW",
                    "SOURCE_ID": "WEB",
                    "OPENED": "Y",
                    "ASSIGNED_BY_ID": 1,
                    "PHONE": [ { "VALUE": this.state.newLead.phone, "VALUE_TYPE": "WORK" } ],
                    "COMMENTS" : this.state.newLead.about
                },
            params: { "REGISTER_SONET_EVENT": "Y" }
        }

        // fetch('https://bavalex.bitrix24.ru/rest/1/goj45yq40qiuxu8y/crm.lead.add.json',{
            fetch('https://dicom.team:5000/SendForm',{
            method: "POST",
            body: JSON.stringify(DataLead),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                document.cookie = "FormSend=true";
                Form.send = true
                // this.state.send = true
                this.setState( prevState => ({ newLead :
                        {...prevState.newLead, send: true
                        }
                }))

            })
        })
    }

    handleClearForm(e) {

        e.preventDefault();
        this.setState({
            newLead: {
                name: '',
                phone: '',
                // gender: '',
                skills: [],
                about: ''
            },
        })
    }

    render() {
        const cookie_send = document.cookie.match ( '(^|;) ?FormSend=([^;]*)(;|$)' );
        console.log(cookie_send)
        let open_form
        if (cookie_send==null) {
            open_form = true;
        }
        else if (!cookie_send[2]==='true') {
            open_form = true;
        }
        else {
            open_form = false
        }
        if (open_form) {
            return (
                <form className="container-fluid" onSubmit={this.handleFormSubmit}>

                    <Input inputtype={'text'}
                           title={'Имя'}
                           name={'name'}
                           value={this.state.newLead.name}
                           placeholder={'Имя'}
                           handleChange={this.handleInput}

                    /> {/* Name of the user */}

                    <Input inputtype={'number'}
                           name={'phone'}
                           title={'Телефон'}
                           value={this.state.newLead.phone}
                           placeholder={'Телефон'}
                           handleChange={this.handlePhone}/> {/* Age */}


                    {/*<Select title={'Gender'}*/}
                    {/*        name={'gender'}*/}
                    {/*        options = {this.state.genderOptions}*/}
                    {/*        value = {this.state.newUser.gender}*/}
                    {/*        placeholder = {'Select Gender'}*/}
                    {/*        handleChange = {this.handleInput}*/}
                    {/*/> /!* Age Selection *!/*/}
                    <CheckBox title={'Какой продукт интересует?'}
                              name={'skills'}
                              options={this.state.skillOptions}
                              selectedOptions={this.state.newLead.skills}
                              handleChange={this.handleCheckBox}
                    /> {/* Skill */}
                    <TextArea
                        title={'Комментарий'}
                        rows={3}
                        value={this.state.newLead.about}
                        name={'currentPetInfo'}
                        handleChange={this.handleTextArea}
                        placeholder={'Комментарий'}/>{/* About you */}
                    <hr/>
                    <Button
                        action={this.handleFormSubmit}
                        type={'success'}
                        title={'Отправить'}
                        // style={buttonStyle}
                    /> { /*Submit */}

                    <Button
                        action={this.handleClearForm}
                        type={'secondary'}
                        title={'Очистить'}
                        // style={buttonStyle}
                    /> {/* Clear the form */}

                </form>
            )
        }
        else {
            return (
                <div className={'alert alert-success'}>
                    Ваша заявка успешно отправлена!
                </div>
            )
        }
    }
}

// const buttonStyle = {
//     margin : '10px 10px 10px 10px'
// }

export default FormContainer;