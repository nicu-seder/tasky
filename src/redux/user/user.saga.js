import {takeLatest, put, call, all} from 'redux-saga/effects';

//import from firebase
import {googleProvider, auth, createUserProfileDocument, getCurrentUser} from "../../firebase/firebase.utils";

//import action types
import UserActionTypes from "./user.types";

//import actions
import {signinSuccess, signinFailure, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure} from "./user.actions";

export function* getSnapshotFromUser(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth,  additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signinSuccess({
            id:userSnapshot.id,
            ...userSnapshot.data()
        }));
    }catch (e) {
        yield put(signinFailure(e.message));
    }
}

export function* signinWithGoogle(){
    try{
        //destructuring the user from the user object which comes up as a result from firebase
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUser(user);
    }catch (e) {
        yield put(signinFailure(e.message));
    }
}

export function* onGoogleSigninStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signinWithGoogle)
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUser(userAuth);
    }catch (e) {
        yield put(signinFailure(e.message))
    }
}

export  function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut(){
    try{
        yield auth.signOut;
        yield put(signOutSuccess())
    }catch (e) {
        yield put(signOutFailure(e))
    }
}

export function* onSignoutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* signUp({payload:{email, displayName, password}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData:{displayName}}));
        console.log('Sign up success');
    }catch (e) {
        yield put(signUpFailure(e.message));
        console.log('Sign up failure');
    }
}

export function* onSignupStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}


export function* signInAfterSignUp({payload:{user,  additionalData}}){
    yield getSnapshotFromUser(user, additionalData);
}


export function* onSignupSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* signInWithEmail({payload:{email, password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUser(user);
    }catch (e) {
        yield put(signinFailure(e.message));
        console.log(e.message);
    }
}

export function* onEmailSigninStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
};

export function* userSagas(){
    yield all(
        [call(onGoogleSigninStart),
                call(onCheckUserSession),
                call(onSignoutStart),
                call(onSignupStart),
                call(onSignupSuccess),
                call(onEmailSigninStart)
        ]
    )
}