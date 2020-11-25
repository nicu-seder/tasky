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

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth)
        return;
    const userDocRef = firestore.doc(`users/${userAuth.uid}`);
    const userDocSnapshot = await userDocRef.get();
    if(!userDocSnapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userDocRef.set({displayName,  email, createdAt, ...additionalData});
        }catch (e) {
            console.log('Error creating user', e.message);
        }
    }
    return userDocRef;
};

export const createTask = async (userAuth, taskInfo)=>{
    if(!userAuth)
        return;
    const {taskName, taskDate, taskDetails, taskLocation, taskColor, taskHour, taskContactPerson} = taskInfo;
    const taskDocRef = firestore.doc(`tasks/${userAuth.id}/items/${taskName}`);
    const taskDocSnapshot = await taskDocRef.get();

    if(!taskDocSnapshot.exists){
        const createdAt = new Date();
        try{
            await taskDocRef.set({createdAt, taskName,  taskLocation, taskHour, taskContactPerson, taskDetails, taskDate, taskColor:taskColor})
        }catch (e) {
            console.log('Error creating task', e.message);
        }
    }
    return taskDocRef;
};

export const getCurrentUser = ()=>{
    return new Promise((resolve, reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth=>{
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
};

export const convertTasks = (taskArray)=>{
    const uniqueDates = [];


    taskArray.map(task => {
        if (!uniqueDates.includes(task.taskDate)){
            uniqueDates.push(task.taskDate)
        }
        return uniqueDates;
    });
    const transformedTasks = uniqueDates.map(date=>{
        const listOfTasks = taskArray.filter(task=>{
            return task.taskDate === date;
        });
        return {
            [date]:listOfTasks
        }
    });
    return transformedTasks;
};


export const getTasks = async (collectionRef)=>{
    const snapshot = await  collectionRef.get();
    const tasks = snapshot.docs.map(task=>{
        return task.data();
    });
    return convertTasks(tasks);
};

export const deleteTask = async (docRef)=>{
    await docRef.delete();
};


export default firestore;