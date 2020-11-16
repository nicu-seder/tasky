import TaskActionTypes from "./task.types";

const INITIAL_STATE = {
    tasks:null,
    isFetching:false,
    errorMessage:undefined
};

const taskReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS_DATE_SUCCESS:
            return {
                ...state,
                tasks:action.payload
            };
        case TaskActionTypes.FETCH_TASKS_DATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default taskReducer;