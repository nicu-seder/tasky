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