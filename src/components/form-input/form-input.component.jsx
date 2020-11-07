import React from 'react';

//import styles
import {FormInputContainer, FormInputText, FormInputLabel} from "./form-input.styles";

const FormInput = ({label, handleChange, ...otherProps})=>{
    return (
        <FormInputContainer>
            <FormInputLabel>{label}</FormInputLabel>
            <FormInputText  onChange={handleChange} {...otherProps}/>
        </FormInputContainer>
    )
};

export default FormInput;