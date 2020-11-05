import React from 'react';

//import styles
import {FormInputContainer} from "./form-input.styles";

const FormInput = ({label, handleChange, ...otherProps})=>{
    return (
        <FormInputContainer>
            <label>{label}</label>
            <input  onChange={handleChange} {...otherProps}/>
        </FormInputContainer>
    )
};

export default FormInput;