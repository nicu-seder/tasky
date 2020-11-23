import {takeLatest, call, put, all} from 'redux-saga/effects';

import TaskActionTypes from "./task.types";

//import from firebase
import firestore from "../../firebase/firebase.utils";
import {getTasks, deleteTask} from "../../firebase/firebase.utils";

//import actions
import {fetchTasksSuccess, fetchTasksFailure} from "./task.actions";

export function* fetchTasksAsync({payload}){
    const userId = payload.id;
    const collectionRef = firestore.collection(`tasks/${userId}/items`);
    try{
        const tasks = yield getTasks(collectionRef);
        yield put(fetchTasksSuccess(tasks));
    }catch (e) {
        yield  put(fetchTasksFailure(e))
    }
}

export function* fetchTasksStartSaga(){
    yield  takeLatest(TaskActionTypes.FETCH_TASKS_DATE_START, fetchTasksAsync);
}

export function* deleteTasksAsync({payload:{taskName, currentUser}}){
    const userId = currentUser.id;
    const docRef = firestore.doc(`tasks/${userId}/items/${taskName}`);
    yield deleteTask(docRef);
}

export function* deleteTaskSaga(){
    yield takeLatest(TaskActionTypes.DELETE_TASK_START, deleteTasksAsync)
}

export function* taskSagas(){
    yield all([
        call(fetchTasksStartSaga),
        call(deleteTaskSaga)
    ])
}