import {takeLatest, put, call, all} from 'redux-saga/effects';

//import from firebase
import {googleProvider, auth, createUserProfileDocument, getCurrentUser} from "../../firebase/firebase.utils";

//import action types
import UserActionTypes from "./user.types";

//import actions
import {googleSigninSuccess, googleSigninFailure} from "./user.actions";

export function* getSnapshotFromUser(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth,  additionalData);
        const userSnapshot = yield userRef.get();
        yield put(googleSigninSuccess({
            id:userSnapshot.id,
            ...userSnapshot.data()
        }));
    }catch (e) {
        yield put(googleSigninFailure(e.message));
    }
}

export function* signinWithGoogle(){
    try{
        //destructuring the user from the user object which comes up as a result from firebase
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUser(user);
    }catch (e) {
        yield put(googleSigninFailure(e.message));
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
        yield put(googleSigninFailure(e.message))
    }
}

export  function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas(){
    yield all(
        [call(onGoogleSigninStart)]
    )
}