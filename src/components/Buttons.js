import React from 'react';


const Button = (props) => {
    // console.log(props.style);
    return(
        <button
            style= {props.style}
            className = {props.type==='success'? 'btn btn-success' : 'btn btn-secondary'}
            onClick= {props.action} >
            {props.title}
        </button>)
}


export default Button;