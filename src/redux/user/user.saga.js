import {takeLatest, put, call, all} from 'redux-saga/effects';

//import from firebase
import {googleProvider, auth} from "../../firebase/firebase.utils";

//import action types
import UserActionTypes from "./user.types";

//import actions
import {googleSigninSuccess, googleSigninFailure} from "./user.actions";

export function* signinWithGoogle(){
    try{
        //destructuring the user from the user object which comes up as a result from firebase
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield put(googleSigninSuccess(user));
        console.log(user);
    }catch (e) {
        yield put(googleSigninFailure(e.message));
    }
}

export function* onGoogleSigninStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signinWithGoogle)
}

export function* userSagas(){
    yield all(
        [call(onGoogleSigninStart)]
    )
}