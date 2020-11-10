import React, {useState} from 'react';

//import styles
import {SignupFormContainer, SignUpTitle, SignUpSubtitle, ButtonsContainer} from "./signup-form.styles";

//import components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//import hooks from redux
import  {useDispatch} from "react-redux";

//import actions
import  {signUpStart} from "../../redux/user/user.actions";

const SignupForm = ()=>{

    const [userCredentials, setUserState] = useState({displayName:'', email:'', password:'', confirmPassword:''});
    const {displayName, email, password, confirmPassword} = userCredentials;

    const dispatch = useDispatch();

    const handleChange = (event)=>{
        const {value,name} = event.target;
        setUserState({...userCredentials, [name]:value});
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Wrong password');
            return;
        }
        dispatch(signUpStart({email, password,  displayName}))
    };

    return (
        <SignupFormContainer>
            <SignUpTitle>Don't have an account?</SignUpTitle>
            <SignUpSubtitle>Please register and let's start</SignUpSubtitle>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name={'displayName'}
                    type={'text'}
                    label={'Display name'}
                    value={displayName}
                    required
                    handleChange={handleChange}
                />
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
                <FormInput
                    name={'confirmPassword'}
                    type={'password'}
                    label={'Confirm password'}
                    value={confirmPassword}
                    required
                    handleChange={handleChange}
                />
                <ButtonsContainer>
                    <CustomButton>Register</CustomButton>
                </ButtonsContainer>
            </form>
        </SignupFormContainer>
    )
};

export default SignupForm;