import React from 'react';

const CheckBox = (props) => {
    return( <div className="form-group">
            <label htmlFor={props.name} className="col-form-label-sm">{props.title}</label>
            <div className="form-check form-switch" style={{textAlign:'left'}}>
                {props.options.map(option => {
                    return (
                        <label key={option} className="form-check-label">
                            <input
                                id = {props.name}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option}
                                checked={ props.selectedOptions.indexOf(option) > -1 }
                                class={'form-check-input'}
                                type="checkbox" /> {option}
                        </label>
                    );
                })}
            </div>
        </div>
    );

}

export default CheckBox;