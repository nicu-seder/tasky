import {all,call} from 'redux-saga/effects';

//import sagas
import {userSagas} from "./redux/user/user.saga";

export default function* rootSaga(){
    yield all(
        [
            call(userSagas)
        ]
    )
}