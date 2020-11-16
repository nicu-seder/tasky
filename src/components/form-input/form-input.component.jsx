import React from 'react';

//import styles
import {FormInputContainer, FormInputText, FormInputLabel} from "./form-input.styles";

const FormInput = ({label,placeholder, handleChange, ...otherProps})=>{
    return (
        <FormInputContainer>
            <FormInputLabel>{label}</FormInputLabel>
            <FormInputText  onChange={handleChange} {...otherProps} placeholder={placeholder}/>
        </FormInputContainer>
    )
};

export default FormInput;