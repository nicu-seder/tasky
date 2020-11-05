import React from 'react';

//import styles
import {Button} from "./custom-button.styles";

const CustomButton = ({children, ...otherProps})=>{
    return (
        <Button {...otherProps}>
            {children}
        </Button>
    )
};

export default CustomButton;