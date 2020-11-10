import React from 'react';

//import  styles
import {SignupPageContainer, SignupPageLogo} from "./signup.styles";

//import components
import SignupForm from "../../components/signup-form/signup-form.component";

const SignupPage = ()=>{
    return (
        <SignupPageContainer>
            <SignupForm/>
            <SignupPageLogo/>
        </SignupPageContainer>
    )
};

export  default SignupPage;