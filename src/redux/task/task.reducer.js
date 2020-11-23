import TaskActionTypes from "./task.types";

const INITIAL_STATE = {
    tasks:null,
    isFetching:true,
    errorMessage:undefined
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
        default:
            return state;
    }
};

export default taskReducer;