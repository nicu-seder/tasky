import React from 'react';

//import styles
import {SigninPageContainer, SigninPageLogo} from "./signin.styles";

//import components
import SigninForm from "../../components/signin-form/signin-form.component";

const SigninPage = ()=>{
    return  (
        <SigninPageContainer>
            <SigninForm/>
            <SigninPageLogo/>
        </SigninPageContainer>
    )
};

export default SigninPage;