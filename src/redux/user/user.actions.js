import UserActionTypes from "./user.types";

export const googleSigninStart = ()=>{
    return {
        type:UserActionTypes.GOOGLE_SIGN_IN_START
    }
};

export const googleSigninSuccess = (user)=>{
    return {
        type:UserActionTypes.SIGN_IN_SUCCESS,
        payload:user
    }
};

export const googleSigninFailure = (error)=>{
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