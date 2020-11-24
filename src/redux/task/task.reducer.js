import TaskActionTypes from "./task.types";

const INITIAL_STATE = {
    tasks:null,
    isFetching:true,
    errorMessage:undefined,
    taskCreationWindowStatus:false
};

const taskReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS_DATE_START:
            return {
                ...state,
                isFetching: true
            };
        case TaskActionTypes.FETCH_TASKS_DATE_SUCCESS:
            return {
                ...state,
                tasks:action.payload,
                isFetching: false
            };
        case TaskActionTypes.FETCH_TASKS_DATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            };
        case TaskActionTypes.CLOSE_TASK_CREATION_WINDOW:
            return {
                ...state,
                taskCreationWindowStatus: false
            };
        case TaskActionTypes.OPEN_TASK_CREATION_WINDOW:
            return {
                ...state,
                taskCreationWindowStatus: true
            };
        default:
            return state;
    }
};

export default taskReducer;