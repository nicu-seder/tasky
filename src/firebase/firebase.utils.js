import firebase from "firebase/app";
import  'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkJ_Prs-NMUyYy7UaSzDR1WxB1W-dwwUs",
    authDomain: "tasky-4db82.firebaseapp.com",
    databaseURL: "https://tasky-4db82.firebaseio.com",
    projectId: "tasky-4db82",
    storageBucket: "tasky-4db82.appspot.com",
    messagingSenderId: "1022636060330",
    appId: "1:1022636060330:web:cd38dbdfe3bb24861e6ad3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});

export  const signInWithGoogle = async()=>{
    try{
        const result = await  auth.signInWithPopup(googleProvider);
        console.log(result.user);
    }catch (e) {
        console.log(e);
    }
};