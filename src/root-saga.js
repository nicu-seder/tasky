import {all,call} from 'redux-saga/effects';

//import sagas
import {userSagas} from "./redux/user/user.saga";
import {taskSagas} from "./redux/task/task.sagas";

export default function* rootSaga(){
    yield all(
        [
            call(userSagas),
            call(taskSagas)
        ]
    )
}