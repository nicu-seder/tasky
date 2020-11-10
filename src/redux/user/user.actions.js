import UserActionTypes from "./user.types";

export const googleSigninStart = ()=>{
    return {
        type:UserActionTypes.GOOGLE_SIGN_IN_START
    }
};

export const signinSuccess = (user)=>{
    return {
        type:UserActionTypes.SIGN_IN_SUCCESS,
        payload:user
    }
};

export const signinFailure = (error)=>{
    return {
        type:UserActionTypes.SIGN_IN_FAILURE,
        payload:error
    }
};

export const checkUserSession = ()=>{
    return {
        type:UserActionTypes.CHECK_USER_SESSION
    }
};

export const signOutStart = ()=>{
    return {
        type:UserActionTypes.SIGN_OUT_START
    }
};

export const signOutSuccess = ()=>{
    return {
        type:UserActionTypes.SIGN_OUT_SUCCESS
    }
};

export const signOutFailure = (error)=>{
    return {
        type:UserActionTypes.SIGN_OUT_FAILURE,
        payload:error
    }
};

export const signUpStart = (userCredentials)=>{
    return {
        type:UserActionTypes.SIGN_UP_START,
        payload:userCredentials
    }
};

export const signUpSuccess = ({user, additionalData})=>{
    return {
        type:UserActionTypes.SIGN_UP_SUCCESS,
        payload:{user, additionalData}
    }
};

export const signUpFailure = (error)=>{
    return {
        type:UserActionTypes.SIGN_UP_FAILURE,
        payload:error
    }
};

export const emailSignInStart = (emailAndPassword)=>{
    return {
        type:UserActionTypes.EMAIL_SIGN_IN_START,
        payload:emailAndPassword
    }
};