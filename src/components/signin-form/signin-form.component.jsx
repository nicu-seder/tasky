import React, {useState} from 'react';

//import styles
import {SigninFormContainer, ButtonsContainer, SignInTitle, SignInSubtitle} from "./signin-form.styles";

//import components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//import redux
import {useDispatch} from "react-redux";

//import actions
import {googleSigninStart, emailSignInStart} from "../../redux/user/user.actions";


const SigninForm = ()=>{
    const [userCredentials, setUserCredentials] = useState({email:'', password:''});
    const {email, password}  = userCredentials;

    const handleChange = (event)=>{
        const {value,  name} = event.target;
        setUserCredentials({...userCredentials, [name]:value});
    };

    const handleSubmit = async (event)=>{
        event.preventDefault();
        startEmailSignin();
    };

    const dispatch = useDispatch();

    const startGoogleSignin = ()=>{
        dispatch(googleSigninStart())
    };

    const startEmailSignin = ()=>{
        dispatch(emailSignInStart({email, password}));
    };

    return (
        <SigninFormContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <SignInSubtitle>Sign in with your email and password</SignInSubtitle>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name={'email'}
                    type={'email'}
                    label={'Email'}
                    value={email}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'password'}
                    type={'password'}
                    label={'Password'}
                    value={password}
                    required
                    handleChange={handleChange}
                />
                <ButtonsContainer>
                    <CustomButton type={'submit'}>Sign in</CustomButton>
                    <CustomButton type={'button'} onClick={startGoogleSignin}>Sign in with google</CustomButton>
                </ButtonsContainer>
            </form>


        </SigninFormContainer>
    )
};



export default SigninForm;
