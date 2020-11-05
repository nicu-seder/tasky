import React, {useState} from 'react';

//import styles
import {SigninFormContainer, ButtonsContainer} from "./signin-form.styles";

//import components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//import redux
import {useDispatch} from "react-redux";

//import actions
import {googleSigninStart} from "../../redux/user/user.actions";


const SigninForm = ()=>{
    const [userCredentials, setUserCredentials] = useState({email:'', password:''});
    const {email, password}  = userCredentials;

    const handleChange = (event)=>{
        const {value,  name} = event.target;
        setUserCredentials({...userCredentials, [name]:value});
        console.log(value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
    };

    const dispatch = useDispatch();
    const startGoogleSignin = ()=>{
        dispatch(googleSigninStart())
    };

    return (
        <SigninFormContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
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
